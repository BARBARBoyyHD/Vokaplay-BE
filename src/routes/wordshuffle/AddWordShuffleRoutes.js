import { Router } from "express";
import { addWordShuffle } from "../../controllers/wordshuffle/AddWordShuffle.js";
const router = Router();

router.post("/api/v2/add/wordshuffle", addWordShuffle);

export default router;
