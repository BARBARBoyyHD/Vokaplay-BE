import { Router } from "express";
import { deleteWordShuffle } from "../../controllers/wordshuffle/DeleteWordShuffle.js";
const router = Router();

router.delete("/api/v2/delete/wordshuffle/:id", deleteWordShuffle);

export default router;
