const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://broker.hivemq.com");

client.on("connect", () => {
  setInterval(() => {
    const data = {
      device_id: "ESP32_SIM",
      temperature: (20 + Math.random() * 8).toFixed(2),
      humidity: (45 + Math.random() * 15).toFixed(2),
      timestamp: new Date().toISOString(),
      company_id: 1,
    };
    const payload = JSON.stringify(data);
    console.log("Saved:", data);
  }, 1500);
});

client.on("error", (err) => {
  console.error("error:", err);
});
