import supabase from "../../supabase/supabase.js";
import upload from "../../middleware/Storage.js";
import { uploadImage } from "../../services/AssetsServices.js";

export const uploadImages = upload.fields([{ name: "Image", maxCount: 1 }]);

export default async function edit(req, res) {
  try {
    const { asset_id } = req.params;
    const { asset_name, user_id, asset_file_name } = req.body; // added asset_file_name
    const files = req.files;

    let imagePath = asset_file_name; // default to existing path

    // If a new file is uploaded, replace the image
    if (files?.Image) {
      imagePath = await uploadImage(files.Image[0], "Images");
    }

    // If neither file nor existing path provided, reject
    if (!imagePath) {
      return res.status(400).json({ message: "Image is required" });
    }

    const { data, error } = await supabase
      .from("asset")
      .update([
        {
          asset_name,
          user_id,
          asset_file_name: imagePath,
        },
      ])
      .eq("asset_id", asset_id)
      .select("*")
      .single();

    if (error) throw error;

    return res.status(200).json({
      type: "success",
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
