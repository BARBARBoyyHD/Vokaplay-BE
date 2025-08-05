import supabase from "../../supabase/supabase.js";
import upload from "../../middleware/Storage.js"; // still using this
import { uploadImage } from "../../services/AssetsServices.js"; // still using this

export default async function edit(req, res) {
  try {
    const { level_id } = req.params;
    const { level_name, user_id } = req.body;

    // Insert into DB
    const { data, error } = await supabase
      .from("level_game")
      .update([
        {
          level_name,
          user_id,
        },
      ])
      .eq("level_id", level_id)
      .select("level_name", "user_id", "created_at")
      .single();

    if (error) throw error;

    return res.status(201).json({
      type: "success",
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
