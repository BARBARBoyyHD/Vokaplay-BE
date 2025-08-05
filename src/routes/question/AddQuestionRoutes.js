import { Router } from "express";
import { addQuestion } from "../../controllers/question/AddQuestion.js";
const router = Router();

router.post("/api/v2/add/question", addQuestion);

export default router;
