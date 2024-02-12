// server.js
import { socketHandle } from "react-query-external-dash";
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
socketHandle({ io });
// Serve static files from the React app
app.use(express.static("build"));

io.on("connection", (socket) => {
  console.log("New client connected");

  // Handle your socket events here
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server running on port ${port}`));
