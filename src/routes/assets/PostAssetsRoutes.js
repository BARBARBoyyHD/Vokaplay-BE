import { Router } from "express";
import post from "../../controllers/assets/PostAssets.js";
const router = Router();

router.post("/api/v2/assets/post", post);

export default router;
