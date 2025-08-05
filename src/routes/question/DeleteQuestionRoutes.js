import { Router } from "express";
import { deleteQuestion } from "../../controllers/question/DeleteQuestion.js";
const router = Router();

router.delete("/api/v2/delete/question/:dt_id", deleteQuestion);

export default router;