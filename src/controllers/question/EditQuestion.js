import supabase from "../../supabase/supabase.js";

// payload

// {
//     "level_name": "Level 1",
//     "level_number": 2,
//     "question": "Chair",
//     "user_id": 2,
//     "answer": "B",
//     "created_at": "2025-08-05T08:37:01.90664",
//     "level_id": 1
// }
export const editQuestion = async (req, res) => {
  try {
    const { dt_id } = req.params;
    const questions = req.body;
    const { data, error } = await supabase
      .from("detail_level")
      .update(questions)
      .eq("dt_id", dt_id)
      .select(
        "dt_id, level_id, level_name, level_number, question, answer, user_id, created_at"
      )
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
