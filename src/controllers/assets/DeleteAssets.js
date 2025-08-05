import supabase from "../../supabase/supabase.js";

export const deleteAsset = async (req, res) => {
  try {
    const { asset_id } = req.params;

    const { data: findID, error: ErrorId } = await supabase
      .from("asset")
      .select("*")
      .eq("asset_id", asset_id)
      .single();

    if (!findID) {
      res.status(404).json({
        type: "Failed",
        message: "Asset not found",
      });
      return;
    }

    const { data, error } = await supabase
      .from("asset")
      .delete()
      .eq("asset_id", asset_id)
      .maybeSingle();

    res.status(200).json({
      message: `Success delete Asset for Id: ${asset_id}`,
    });
    return;
  } catch (error) {
    res.status(500).json({ message: error.message });
    return;
  }
};
