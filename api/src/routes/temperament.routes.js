const { Router } = require("express");
const { getTemperaments } = require("../utils/Temp");

const router = Router();

router.get("/", getTemperaments);

module.exports = router;
