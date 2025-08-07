import { Router } from "express";
import { editWordShuffle } from "../../controllers/wordshuffle/EditWordShuffle.js";
const router = Router();

router.put("/api/v2/edit/wordshuffle/:id", editWordShuffle);

export default router;
