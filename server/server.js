require("dotenv").config();
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const index = require("./routes");
const { handleConnection } = require("./handleConnection");

const port = process.env.PORT || 4000;
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", handleConnection);

server.listen(port, () => console.info(`Listening on port ${port}`));
