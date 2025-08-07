import supabase from "../../supabase/supabase.js";

export const detailWordShuffle = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("word_shuffle")
      .select("id, level_id, question, answer, question_number, asset_file")
      .eq("id", id)
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
