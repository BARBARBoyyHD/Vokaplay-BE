import supabase from "../../supabase/supabase.js";

export const getAllQuestion = async (req, res) => {
  try {
    const { data, error } = await supabase.from("detail_level").select("*");
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
