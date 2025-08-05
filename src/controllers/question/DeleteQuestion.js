import supabase from "../../supabase/supabase.js";

export const deleteQuestion = async (req, res) => {
  try {
    const { dt_id } = req.params;

    // Check if level exists in the level table (if that's where you're deleting from)
    const { data: findLevel, error: findError } = await supabase
      .from("detail_level")
      .select("*")
      .eq("dt_id", dt_id)
      .single();

    if (findError || !findLevel) {
      return res.status(404).json({
        type: "Failed",
        message: "Level not found",
      });
    }

    // Proceed to delete the level
    const { error: deleteError } = await supabase
      .from("detail_level")
      .delete("*")
      .eq("dt_id", dt_id);

    if (deleteError) {
      return res.status(500).json({
        type: "Failed",
        message: "Failed to delete level",
        error: deleteError.message,
      });
    }

    res.status(200).json({
      message: `Success deleting detail_level with ID: ${dt_id}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
