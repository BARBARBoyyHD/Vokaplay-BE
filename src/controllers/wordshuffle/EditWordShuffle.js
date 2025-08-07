import supabase from "../../supabase/supabase.js";

// payload
// {
//     "level_id":3,
//     "question":"MONGKEY",
//     "answer":"MONGKEY",
//     "question_number":2,
//     "asset_file":2
// }

export const editWordShuffle = async (req, res) => {
  try {
    const { id } = req.params;
    const questions = req.body; // Expect array of objects

    const { data, error } = await supabase
      .from("word_shuffle")
      .update(questions)
      .eq("id", id)
      .select("id, level_id, question, answer, question_number, asset_file")
      .single();

    if (error) throw error;

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
