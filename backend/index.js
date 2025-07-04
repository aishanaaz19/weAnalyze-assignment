import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import verifyToken from "./middleware/auth.middleware.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "https://we-analyze-assignment-go7b.vercel.app/",
  credentials: true,
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the WeAnalyze API");
});

app.get("/api/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the protected dashboard", user: req.user });
});

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
