import supabase from "../../supabase/supabase.js";

export const addNewLevel = async (req, res) => {
  try {
    const { level_name, user_id } = req.body;

    const { data, error } = await supabase
      .from("level_game")
      .insert([
        {
          level_name,
          user_id,
        },
      ])
      .select("level_name", "user_id")
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
