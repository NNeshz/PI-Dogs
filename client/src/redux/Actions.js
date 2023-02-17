import axios from 'axios';
import { GET_DOGS } from './Constantes'

export function getDogs() {
    return async function (dispatch) {
        var json = await axios.get(`http://localhost:3001/dogs`)
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}