import { Router } from "express";
import edit from "../../controllers/level/EditLevel.js";
const router = Router();

router.put("/api/v2/level/edit/:level_id", edit);

export default router;
