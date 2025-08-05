import { Router } from "express";
import { editQuestion } from "../../controllers/question/EditQuestion.js";
const router = Router();

router.put("/api/v2/edit/question/:dt_id", editQuestion);

export default router;
