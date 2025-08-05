import { Router } from "express";
import { deleteLevel } from "../../controllers/level/DeleteLevel.js";
const router = Router();

router.delete("/api/v2/delete/level/:level_id", deleteLevel);

export default router;
