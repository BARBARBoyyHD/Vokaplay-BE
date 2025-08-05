import { Router } from "express";
import get from "./../../controllers/assets/GetAllAssets.js";
const router = Router();

router.get("/api/v2/list/assets", get);

export default router;
