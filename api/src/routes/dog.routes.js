const { Router } = require("express");
const {
  getDogs,
  getDogId,
  createDog,
} = require("../controllers/Dogs.controllers");

const { deleteDog } = require('../utils/utils')

const router = Router();

router.delete('/:id', deleteDog)

router.get("/", getDogs);

router.get("/:id", getDogId);

router.post("/", createDog);

module.exports = router;