import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT;

//CORS Policy
app.use(cors());

app.use(express.json());

//Load Routes
app.use("/api/user", userRoutes);

//Database conection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Dtabase connect");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
