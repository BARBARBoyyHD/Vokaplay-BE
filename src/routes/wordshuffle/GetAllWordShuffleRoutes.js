import { Router } from "express";
import { getWordShuffle } from "../../controllers/wordshuffle/GetAllWordShuffle.js";
const router = Router();

router.get("/api/v2/list/wordshuffle", getWordShuffle);

export default router;
