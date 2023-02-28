const axios = require('axios')
const { API_KEY } = process.env;
const { Dog, Temperament } = require('../db')

const getDogsAPI = async (req, res) => {
    let apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    let dogsMap = apiDogs.data.map((dog) => {
        let tempArr = [];

        if(dog.temperament) {
            tempArr = dog.temperament.split(/(?:,| )+/)
        }
        
        return {
            id: dog.id,
            image: dog.image.url,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            lifeSpan: dog.life_span.replace(' years', ''),
            temperaments: tempArr
        }
    })
    return dogsMap;
}

const getDogsDB = async (req, res) => {
    const dbDogs = await Dog.findAll({
     include: {
        model: Temperament,
        attributes: ['name']
     } 
    })
    const dogsDB = dbDogs?.map((el) => ({
        ...el.toJSON(),
        temperaments: el.temperaments?.map((t) => t.name)
    }))
    return dogsDB;
}

const getAllDogs = async (req, res) => {
    try {
        const dbDogs = await getDogsDB();
        const apiDogs = await getDogsAPI();
        return [...dbDogs, ...apiDogs];
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllDogs };