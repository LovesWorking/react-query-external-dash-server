// server.js
const { socketHandle } = require("react-query-external-dash");

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
// const io = socketIo(server);
// Configure CORS policy for Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*", // Accept connections from any origin
    methods: ["GET", "POST"], // Allow only GET and POST requests
    // allowedHeaders: ["my-custom-header"], // Optional: specify custom headers
    // credentials: true, // Optional: enable credentials
  },
});
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
