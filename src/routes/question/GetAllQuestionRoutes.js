import { Router } from "express";
import { getAllQuestion } from "../../controllers/question/GetAllQuestion.js";
const router = Router();

router.get("/api/v2/list/questions", getAllQuestion);

export default router;
