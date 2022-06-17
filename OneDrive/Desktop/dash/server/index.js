const server = require("http").createServer();

const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});

io.on("connection", (client) => {
  setInterval(() => {
    const happy = Math.random();
    const fear = Math.random();
    const sad = Math.random();
    const neutral = Math.random();
    const disgust = Math.random();
    const surprise = Math.random();
    const angry = Math.random();
    const values = {
      happy: happy,
      fear: fear,
      sad: sad,
      neutral: neutral,
      disgust: disgust,
      surprise: surprise,
      angry: angry,
    };
    client.emit("set", values);
  }, 1000);
});

server.listen(5000);
