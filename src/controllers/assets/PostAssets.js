import supabase from "../../supabase/supabase.js";
import upload from "../../middleware/Storage.js"; // still using this
import { uploadImage } from "../../services/AssetsServices.js"; // still using this

export const uploadImages = upload.fields([{ name: "Image", maxCount: 1 }]);

export default async function post(req, res) {
  try {
    const {
      asset_name,
      user_id,
    } = req.body;
    const files = req.files;

    if (!files?.Image) {
      res.status(400).json({ message: "Image are required" });
      return;
    }

    // Upload images to Supabase
    const Images = await uploadImage(files.Image[0], "Images");

    // Insert into DB
    const { data, error } = await supabase
      .from("asset")
      .insert([
        {
          asset_name,
          user_id,
          asset_file_name: Images,
        },
      ])
      .select("*")
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
