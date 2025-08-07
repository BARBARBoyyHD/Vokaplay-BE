import supabase from "../../supabase/supabase.js";

export const deleteWordShuffle = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if level exists in the level table (if that's where you're deleting from)
    const { data: findLevel, error: findError } = await supabase
      .from("word_shuffle")
      .select("*")
      .eq("id", id)
      .single();

    if (findError || !findLevel) {
      return res.status(404).json({
        type: "Failed",
        message: "Level not found",
      });
    }

    // Proceed to delete the level
    const { error: deleteError } = await supabase
      .from("word_shuffle")
      .delete("*")
      .eq("id", id);

    if (deleteError) {
      return res.status(500).json({
        type: "Failed",
        message: "Failed to delete level",
        error: deleteError.message,
      });
    }

    res.status(200).json({
      message: `Success deleting word_shuffle with ID: ${id}`,
    });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};
