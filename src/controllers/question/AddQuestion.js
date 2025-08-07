import supabase from "../../supabase/supabase.js";

// question payload
// [
//   {
//     "level_id": 1,
//     "level_name": "Level 1",
//     "level_number": 1,
//     "user_id": 2,
//     "question": "Question 1",
//     "answer": "A",
//     "asset_file":2
//   },
//   {
//     "level_id": 1,
//     "level_name": "Level 1",
//     "level_number": 2,
//     "user_id": 2,
//     "question": "Question 2",
//     "answer": "B",
//     "asset_file":2
//   },
//   {
//     "level_id": 1,
//     "level_name": "Level 1",
//     "level_number": 3,
//     "user_id": 2,
//     "question": "Question 3",
//     "answer": "C",
//     "asset_file":2
//   }
//   // ... up to 10
// ]

export const addQuestion = async (req, res) => {
  try {
    const questions = req.body; // Expect array of objects

    const { data, error } = await supabase
      .from("detail_level")
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
