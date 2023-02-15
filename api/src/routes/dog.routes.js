const { Router } = require("express");
const {
  getDogs,
  getDogId,
  createDog,
} = require("../controllers/Dogs.controllers");

const router = Router();

router.get("/", getDogs);

router.get("/:id", getDogId);

router.post("/", createDog);

module.exports = router;