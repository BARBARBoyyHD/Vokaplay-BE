import { Router } from "express";
import { detailWordShuffle } from "../../controllers/wordshuffle/DetailWordShuffle.js";
const router = Router();

router.get("/api/v2/detail/wordshuffle/:id", detailWordShuffle);

export default router;
