import { Router } from "express";
import {addNewLevel} from "../../controllers/level/AddNewLevel.js";

const router = Router();

router.post("/api/v2/add/level", addNewLevel);

export default router;
