import axios from "axios";
import { URL_PLANETS } from "../constants/urls";

export const getPlanetList = (dadoSalvo) => {
    axios.get(URL_PLANETS)
    .then((res) => dadoSalvo(res.data.results))
    .catch((err) => console.log(err.message))
};

export const getPlanet = (url, salvaDado) => {
    axios.get(url)
    .then((res) => {
        salvaDado(res.data)})
    .catch((err) => console.log(err.message))
};