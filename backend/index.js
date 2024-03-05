const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const minRouter = require("./routes/index");
app.use("/api/v1", minRouter);

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
