const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
