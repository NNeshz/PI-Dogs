import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  GET_DOG_BY_NAME,
  GET_DOG_DETAIL,
  FILTER_BY_CREATED,
  FILTER_BY_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  POST_DOG,
} from "./Constantes";

const initialState = {
  dogs: [],
  dogsFilter: [],
  temperaments: [],
  dogDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        dogsFilter: action.payload,
      };

    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case GET_DOG_BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };

    case POST_DOG:
      return {
        ...state,
      };

    case FILTER_BY_TEMPERAMENTS:
      const allDogs = state.dogsFilter;
      const dogsFiltered =
        action.payload === "All"
          ? allDogs
          : allDogs.filter((dog) => {
              return dog.temperaments.find((temp) => {
                return temp === action.payload;
              });
            });
      return {
        ...state,
        dogs: dogsFiltered,
      };

    case FILTER_BY_CREATED:
      const allDogsIn = state.dogsFilter;
      const dogsCreated =
        action.payload === "Created"
          ? allDogsIn.filter((dog) => dog.createdInDb)
          : allDogsIn.filter((dog) => !dog.createdInDb);
      return {
        ...state,
        dogs: action.payload === "All" ? allDogsIn : dogsCreated,
      };

    case ORDER_BY_NAME:
      const allDogsName = state.dogsFilter;
      const orderDogsName =
        action.payload === "Asc"
          ? allDogsName.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : allDogsName.sort(function (a, b) {
              if (a.name < b.name) {
                return 1;
              }
              if (b.name < a.name) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: action.payload === "All" ? allDogsName : orderDogsName,
      };
    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
