const { Server } = require("./Server");
const { Client } = require("./Client");
const wsUri = "ws://localhost:3000";
const wsServerPort = 3000;

const server = new Server(wsServerPort);
const client = new Client(wsUri);

client.sendMessage("this is my message", (res) => console.log(`task 1 ${res}`));

client.sendMessage("hello nodejs, im the server", (res) =>
  console.log(`task 2 ${res}`)
);
