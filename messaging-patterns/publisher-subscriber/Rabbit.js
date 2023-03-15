var amqp = require("amqplib");
const amqpUri = "amqp://localhost";

module.exports = async () => {
  try {
    const connection = await amqp.connect(amqpUri);
    return await connection.createChannel();
  } catch (e) {
    console.error("failed to create amqp channel: ", e);
  }
};
