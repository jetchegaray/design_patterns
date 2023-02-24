const Socket = require("ws");
const uuid = require("uuid");

class Client {
  handlers = [];
  constructor(wsUri) {
    this.socket = new Socket(wsUri);
    this.socket.on("message", (msg) => {
      this.receiveMessage.call(this, JSON.parse(msg));
    });
    this.handlers = [];
  }

  receiveMessage({ key, correlationId, reply }) {
    // do we have a function in the handlers for this response ?
    if (key === "reply" && typeof this.handlers[correlationId] === "function") {
      this.handlers[correlationId](reply); // invoke the handler for that reply
      delete this.handlers[correlationId];
    }
  }

  sendMessage(text, callback) {
    //check for open connection
    this.socket.on("open", (msg) => {
      const correlationId = uuid.v4().toString();
      this.handlers[correlationId] = callback;
      const payload = {
        key: "request",
        correlationId,
        text,
      };
      this.socket.send(JSON.stringify(payload));
    });
  }
}

module.exports = { Client };
