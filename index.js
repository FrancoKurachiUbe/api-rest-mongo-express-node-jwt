import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
//import cors from "cors";
//import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";

const app = express();

//app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", authRoutes);


/* app.get("/", (req, res) => {
    res.json({ ok: true})
}) */
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("😍😍 http://localhost:" + PORT));
