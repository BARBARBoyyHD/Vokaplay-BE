import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import upload from "./src/middleware/Storage.js";
dotenv.config();

import LoginAdminRoutes from "./src/routes/admin/LoginAdminRoutes.js";
import RegisterAdminRoutes from "./src/routes/admin/RegisterAdminRoutes.js";
import DeleteAssets from "./src/routes/assets/DeleteAssetsRoutes.js";
import DetailAssets from "./src/routes/assets/DetailAssetsRoutes.js";
import EditAssets from "./src/routes/assets/EditAssetsRoutes.js";
import GetAllAssets from "./src/routes/assets/GetAllAssetsRoutes.js";
import PostAssets from "./src/routes/assets/PostAssetsRoutes.js";
import AddNewLevel from "./src/routes/level/AddNewLevelRoutes.js";
import DetailLevel from "./src/routes/level/DetailLevelRoutes.js";
import AllLevel from "./src/routes/level/GetAllLevel.js";
import EditLevel from "./src/routes/level/EditLevelRoutes.js";
import DeleteLevel from "./src/routes/level/DeleteLevelRoutes.js";
import AddQuestion from "./src/routes/question/AddQuestionRoutes.js";
import DetailQuestion from "./src/routes/question/DetailQuestionRoutes.js";
import DeleteQuestion from "./src/routes/question/DeleteQuestionRoutes.js";
import GetAllQuestion from "./src/routes/question/GetAllQuestionRoutes.js";
import EditQuestion from "./src/routes/question/EditQuestionRoutes.js";
import AddWordShuffle from "./src/routes/wordshuffle/AddWordShuffleRoutes.js";
import EditWordShuffle from "./src/routes/wordshuffle/EditWorldShuffleRoutes.js";
import DetailWordShuffle from "./src/routes/wordshuffle/DetailWordShuffleRoutes.js";
import DeleteWordShuffle from "./src/routes/wordshuffle/DeleteWordShuffleRoutes.js";
import GetAllWordShuffle from "./src/routes/wordshuffle/GetAllWordShuffleRoutes.js"

const app = express();
const port = process.env.PORT;

const assetsUpload = upload.fields([{ name: "Image", maxCount: 1 }]);
app.use(
  cors({
    origin: ["https://vokaplay-management-system.vercel.app", "http://localhost:8080"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("working");
});

// Admin
app.post("/api/v2/register", RegisterAdminRoutes);
app.post("/api/v2/login", LoginAdminRoutes);
app.post("/api/v2/assets/post", assetsUpload, PostAssets);
app.post("/api/v2/add/level", AddNewLevel);
app.post("/api/v2/add/question", AddQuestion);
app.post("/api/v2/add/wordshuffle", AddWordShuffle);

app.delete("/api/v2/delete/assets/:asset_id", DeleteAssets);
app.delete("/api/v2/delete/level/:level_id", DeleteLevel);
app.delete("/api/v2/delete/question/:dt_id", DeleteQuestion);
app.delete("/api/v2/delete/wordshuffle/:id", DeleteWordShuffle);

app.put("/api/v2/assets/edit/:asset_id", assetsUpload, EditAssets);
app.put("/api/v2/level/edit/:level_id", EditLevel);
app.put("/api/v2/edit/question/:dt_id", EditQuestion);
app.put("/api/v2/edit/wordshuffle/:id", EditWordShuffle);

app.get("/api/v2/list/assets", GetAllAssets);
app.get("/api/v2/detail/assets/:asset_id", DetailAssets);
app.get("/api/v2/detail/level/:level_id", DetailLevel);
app.get("/api/v2/list/level", AllLevel);
app.get("/api/v2/detail/question/:level_id", DetailQuestion);
app.get("/api/v2/list/questions", GetAllQuestion);
app.get("/api/v2/detail/wordshuffle/:id", DetailWordShuffle);
app.get("/api/v2/list/wordshuffle", GetAllWordShuffle);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
