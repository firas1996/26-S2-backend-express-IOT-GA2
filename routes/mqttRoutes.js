const { getAllMqtt, createMqtt } = require("../controllers/mqttController");

const router = require("express").Router();

router.get("/api/mqtt", getAllMqtt);
router.post("/api/mqtt", createMqtt);

module.exports = router;
