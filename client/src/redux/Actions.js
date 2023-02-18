import axios from "axios";
import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  FILTER_BY_CREATED,
  FILTER_BY_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  GET_DOG_BY_NAME,
  GET_DOG_DETAIL,
} from "./Constantes";

export function getDogs() {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/dogs`);
    return dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  };
}

export function getDogDetail(id) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/dogs/${id}`);
        console.log(json.data);
        return dispatch({
            type: GET_DOG_DETAIL,
            payload: json.data
        })
    }
}

export function getDogByName(name) {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/dogs?name=${name}`)
        return dispatch({
            type: GET_DOG_BY_NAME,
            payload: json.data
        })
    }
}

export function getTemeraments() {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/temperaments`)
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: json.data
        })
    }
}

export function filterByCreated(value) {
    return {
        type: FILTER_BY_CREATED,
        payload: value
    }
}

export function filterByTemperament(value) {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload: value
    }
}

export function orderByName(value) {
    return {
        type: ORDER_BY_NAME,
        payload: value
    }
}

export function orderByWeight(value) {
    return {
        type: ORDER_BY_WEIGHT,
        payload: value
    }
}