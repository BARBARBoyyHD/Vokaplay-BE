import supabase from "../../supabase/supabase.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "Please fill all the fields" });
      return;
    }

    // Check if admin already exists
    const { data: existingUsers, error: fetchError } = await supabase
      .from("users")
      .select("username,role,user_id")
      .eq("username", username)
      .single();

    if (fetchError) {
      res.status(500).json({ message: fetchError.message });
      return;
    }

    if (existingUsers) {
      // If users exists, compare the provided password with the stored hashed password

      res.status(200).json({
        type: "success",
        message: "Login Succes",
        data: existingUsers,
      });
      return;
    }

    const { data, error: insertError } = await supabase
      .from("users")
      .insert([
        {
          username,
          password,
        },
      ])
      .select("username,role,user_id")
      .single();

    if (insertError) {
      res.status(500).json({ message: insertError.message });
      return;
    }

    res.status(201).json({
      type: "success",
      data: data,
    });

    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};
