require("dotenv").config();
// express: fast, minimailist framework for node.js
const express = require("express");
//use http server and one client must require it
const http = require("http");
// use websocket, Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server.
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
