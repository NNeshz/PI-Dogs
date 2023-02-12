const { getAllDogs } = require("../utils/utils");

const getDogs = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      let dogs = await getAllDogs();
      res.status(202).send(dogs);
    } else {
      let dogs = await getAllDogs();
      let dogName = dogs.filter((p) => {
        p.name.toLowerCase().includes(name.toLowerCase());
      });

      dogName
        ? res.status(202).send(dogName)
        : res.status(404).send({ message: "Dog not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getDogId = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      let dogs = await getAllDogs();
      res.status(202).send(dogs);
    } else {
      let dogs = await getAllDogs();
      let dogId = dogs.filter((p) => p.id == id);

      dogId
        ? res.status(202).send(dogId)
        : res.status(404).send({ message: "Dog ID not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createDog = async (req, res) => {};

module.exports = {
  getDogs,
  getDogId,
  createDog,
};
