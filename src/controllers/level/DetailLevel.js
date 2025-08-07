import supabase from "../../supabase/supabase.js";

export const detailLevel = async (req, res) => {
  try {
    const { level_id } = req.params;

    const { data, error } = await supabase
      .from("level_game")
      .select("level_id, level_name ,user_id, created_at")
      .eq("level_id", level_id)
      .single();

    if (error) throw error;
    res.status(200).json({
      type: "succes",
      data: data,
    });

    return;
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }
};
