import supabase from "../../supabase/supabase.js";

export const allLevel = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("level_game")
      .select("level_name", "user_id", "created_at");

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
