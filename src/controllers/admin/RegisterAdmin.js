import supabase from "../../supabase/supabase.js";

export const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password) {
      res.status(400).json({ message: "please fill all the fields" });
      return;
    }

    if(password.length < 6) {
      res.status(400).json({ message: "password must be at least 6 characters" });
      return;
    }

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          username,
          password,
          role,
        },
      ])
      .select("username,role")
      .single();

    if (error) throw error;
    res.status(201).json({
      type: "succes",
      data: data,
    });

    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};
