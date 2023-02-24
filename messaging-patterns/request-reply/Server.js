const SocketServer = require("ws").Server;

const reverse = (str) => str.split("").reverse().join("");

class Server {
  constructor(port) {
    this.server = new SocketServer({ port });
    this.server.on("connection", (ws) => {
      console.log("SERVER::Connection established");
      this.connectionHandler.call(this, ws);
    });
  }
  payload;

  connectionHandler(ws) {
    ws.on("message", (msg) => {
      const { text, correlationId, key } = JSON.parse(msg);
      //key is the type of the operation
      if (key === "request" && text) {
        const reply = reverse(text);
        const payload = JSON.stringify({
          key: "reply",
          correlationId,
          reply,
        });
        ws.send(payload);
        // we dont implement the return address because every response will be sent back to the respective client
      }
    });
  }
}

module.exports = { Server };
