import { Router } from "express";
import { deleteAsset } from "../../controllers/assets/DeleteAssets.js";
const router = Router();

router.delete("/api/v2/delete/assets/:asset_id", deleteAsset);

export default router;
