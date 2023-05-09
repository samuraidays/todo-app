const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const PORT = 8100;

app.use(express.json());

// ルーティング
app.use("/api/v1/tasks", taskRoute);

// データベース接続
const start  = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        // サーバ起動
        app.listen(PORT, console.log("サーバが起動しました"));
    } catch(err) {
        console.log(err);
    }
};

start();
