const axios = require("axios");
const { API_KEY } = process.env;
const { Temperament } = require("../db");

const getTemperaments = async (req, res) => {
  try {
    const temperamentsAPI = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    const tempAPI = temperamentsAPI.data.map((el) => el.temperament);
    const cleanTemp = tempAPI.toString().split(/(?:,| )+/); // Cree un string completo y luego lo convierte a un array con split

    cleanTemp.forEach((el) => {
      Temperament.findOrCreate({
        where: { name: el },
      });
    });

    const allTemperament = await Temperament.findAll();
    res.status(202).send(allTemperament);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTemperaments,
};
