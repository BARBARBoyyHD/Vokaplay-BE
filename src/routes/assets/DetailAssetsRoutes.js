import { Router } from "express";
import detail from "../../controllers/assets/DetailAssets.js";
const router = Router();

router.get("/api/v2/detail/assets/:asset_id", detail);

export default router;