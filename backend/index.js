const express = require("express");
const app = express();
const port = 8001;
const UserRouter = require("./router/userRouter");

app.use(express.urlencoded({ extended: false }));

app.use("/users", UserRouter);

app.listen(8001, () => {
  console.log("gekommen");
});
