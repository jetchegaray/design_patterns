const Rabbit = require("./Rabbit");
const readLine = require("readline");
const exchange = "annouuncements";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const RabbitSays = async (message) => {
  try {
    const connection = await Rabbit();
    const channel = await connection?.createChannel();
    console.log("aaaaa");
    console.log(channel);
    await channel?.assertExchange(exchange, "fanout", { durable: false });
    //durable false message wount survive to broker restart
    console.log("paso2");

    await channel?.publish(exchange, "", Buffer.from(message));
    console.log("pas4o");

    await channel?.close();
    await connection?.close();
  } catch ({ code }) {
    console.log(code);
    console.log(code === "ECONREFUSED" ? "RabbitMQ is offline" : code);
    process.exit(0);
  }
};

rl.setPrompt(":> ");
rl.prompt();
rl.on("line", (message) => {
  if (message === "quit") {
    rl.close();
    process.exit(0);
  } else {
    RabbitSays(message);
    rl.prompt();
  }
});
