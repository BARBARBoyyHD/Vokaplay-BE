import supabase from "../../supabase/supabase.js";

export const getAllQuestion = async (req, res) => {
  try {
    const { data, error } = await supabase.from("detail_level").select(`
    dt_id,
    level_id,
    level_name,
    level_number,
    question,
    answer,
    user_id,
    asset:asset_file (
      asset_id,
      asset_name,
      asset_file_name,
      created_at,
      user_id
    )
  `);

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
