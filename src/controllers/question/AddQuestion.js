import supabase from "../../supabase/supabase.js";

// question payload 
// [
//   {
//     "level_id": 1,
//     "level_name": "Level 1",
//     "level_number": 1,
//     "user_id": 2,
//     "question": "Question 1",
//     "answer": "A"
//   },
//   {
//     "level_id": 1,
//     "level_name": "Level 1",
//     "level_number": 2,
//     "user_id": 2,
//     "question": "Question 2",
//     "answer": "B"
//   },
//   {
//     "level_id": 1,
//     "level_name": "Level 1",
//     "level_number": 3,
//     "user_id": 2,
//     "question": "Question 3",
//     "answer": "C"
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
