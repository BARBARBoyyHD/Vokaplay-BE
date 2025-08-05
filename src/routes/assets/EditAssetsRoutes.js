import { Router } from "express";
import edit from "../../controllers/assets/EditAssets.js";
const router = Router();

router.put("/api/v2/assets/edit/:asset_id", edit);

export default router;
