import supabase from "../../supabase/supabase.js";

export const detailQuestion = async (req, res) => {
  try {
    const { dt_id } = req.params;

    const { data, error } = await supabase
      .from("detail_level")
      .select(
        "dt_id, level_id, level_name, level_number, question, answer, user_id, created_at"
      )
      .eq("dt_id", dt_id)
      .single();

    if (error) throw error;

    res.status(200).json({
      type: "success",
      data: data,
    });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};
