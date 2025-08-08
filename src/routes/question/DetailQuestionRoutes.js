import { Router } from "express";
import { detailQuestion } from "../../controllers/question/DetailQuestion.js";
const router = Router();

router.get("/api/v2/detail/question/:dt_id", detailQuestion);

export default router;
