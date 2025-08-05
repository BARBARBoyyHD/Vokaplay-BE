import supabase from "../../supabase/supabase.js";

export default async function get(req, res) {
  try {
    const { data, error } = await supabase
      .from("asset")
      .select("asset_id, asset_name, asset_file_name, user_id, created_at");
    if (error) throw error;
    res.status(200).json({
      type: "Success",
      data: data,
    });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
}
