import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tasksRouter from "./routes/tasks";
import categoriesRouter from "./routes/categories";

dotenv.config();

const app = express();
app.use(express.json()); // 允许解析 JSON 请求体
app.use(cors()); // 允许跨域请求

// 注册 API 路由
app.use("/api", tasksRouter);
app.use("/api", categoriesRouter);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
