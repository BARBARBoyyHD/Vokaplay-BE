import supabase from "../../supabase/supabase.js";

// payload
// {
//     "level_id":3,
//     "question":"MONGKEY",
//     "answer":"MONGKEY",
//     "question_number":2,
//     "asset_file":2
// }

export const addWordShuffle = async (req, res) => {
  try {
    const questions = req.body; // Expect array of objects

    const { data, error } = await supabase
      .from("word_shuffle")
      .insert(questions)
      .select();

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
