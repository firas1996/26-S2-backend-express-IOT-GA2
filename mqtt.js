const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
  console.log("Connected to MQTT broker");

  client.subscribe("iot/iotavance_lenovo_2026");
});

client.on("message", (topic, message) => {
  try {
    const data = JSON.parse(message.toString());

    // 🏢 Associer à une entreprise (à rendre dynamique plus tard)
    data.company_id = 1;

    console.log("Saved:", data);
    const temp = parseFloat(data.temperature);
  } catch (error) {
    console.error("Erreur parsing MQTT:", error);
  }
});

module.exports = client;
