const { Dog, Temperament } = require("../db");
const { getAllDogs } = require("../utils/utils");

const getDogs = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let dogs = await getAllDogs();
      let dogName = dogs.filter(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );

      dogName
        ? res.status(202).send(dogName)
        : res.status(404).send({ message: "No dog found" });
    } else {
      let dogs = await getAllDogs();
      res.status(202).send(dogs);
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
      let dogId = dogs.find((p) => p.id == id);

      dogId
        ? res.status(202).send(dogId)
        : res.status(404).send({ message: "Dog ID not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const createDog = async (req, res) => {
  const { image, name, height, weight, lifeSpan, temperaments } = req.body;
  try {
    const newDog = await Dog.create({
      image: image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png',
      name,
      height,
      weight,
      lifeSpan,
    });

    let tempDog = await Temperament.findAll({
      where: {
        name: temperaments,
      },
    });

    let tempArr = tempDog.map(temp => temp.name)
    console.log(tempArr)

    newDog.addTemperament(tempDog);

    res.status(202).send(newDog);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getDogs,
  getDogId,
  createDog,
};
