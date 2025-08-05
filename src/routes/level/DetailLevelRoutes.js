import { Router } from "express";
import { detailLevel } from "../../controllers/level/DetailLevel.js";
const router = Router();

router.get("/api/v2/detail/level/:level_id", detailLevel);

export default router;
