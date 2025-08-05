import { Router } from "express";
import { detailQuestion } from "../../controllers/question/DetailQuestion.js";
const router = Router();

router.get("/api/v2/detail/question/:level_id", detailQuestion);

export default router;
