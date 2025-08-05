import supabase from "../../supabase/supabase.js";

export const deleteLevel = async (req, res) => {
  try {
    const { level_id } = req.params;

    // Check if level exists in the level table (if that's where you're deleting from)
    const { data: findLevel, error: findError } = await supabase
      .from("level_game")
      .select("*")
      .eq("level_id", level_id)
      .single();

    if (findError || !findLevel) {
      return res.status(404).json({
        type: "Failed",
        message: "Level not found",
      });
    }

    // Proceed to delete the level
    const { error: deleteError } = await supabase
      .from("level_game")
      .delete()
      .eq("level_id", level_id);

    if (deleteError) {
      return res.status(500).json({
        type: "Failed",
        message: "Failed to delete level",
        error: deleteError.message,
      });
    }

    res.status(200).json({
      message: `Success deleting level with ID: ${level_id}`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
