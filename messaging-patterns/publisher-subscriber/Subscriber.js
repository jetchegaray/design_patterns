const Rabbit = require("./Rabbit");
const exchange = "announcement";

const RabbitHears = async () => {
  try {
    const conn = await Rabbit();
    const channel = await conn?.createChannel();
    const qok = await channel?.assertQueue("", { exclusive: true });
    const bindQueue = await channel?.bindQueue(qok.queue, exchange, "");
    await channel?.consume(
      bindQueue?.queue,
      (msg) => console.log(`>:> ${msg.content.toString()}`),
      { noAck: true } // acknolegment wont be send back
    );
  } catch ({ code }) {
    console.log(code === "ECONNREFUSED" ? "RabbitMQ is offline" : code);
  }
};

RabbitHears();
