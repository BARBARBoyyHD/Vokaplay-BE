import { Router } from "express";
import { allLevel } from "../../controllers/level/GetAllLevel.js";
const router = Router();

router.get("/api/v2/list/level", allLevel);

export default router;
