const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const port = 8100;

app.use("/api/v1/tasks", taskRoute);

app.use(express.json());

app.listen(port, () => {
    console.log(`サーバ起動 on port ${port}`)
  })
