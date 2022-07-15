import axios from "axios";
import { BASE_URL } from "../constants/urls";

// function getCharacterList() {
//     axios.get(`${BASE_URL}/people/`)
//     .then((response) => setCharacterList(response.data.results))
//     .catch((error) => console.log("Erro:", error.messege))
// };

export const getCharacterList = (dadoSalvo) => {
    axios.get(`${BASE_URL}/people/`)
    .then((res) => dadoSalvo(res.data.results))
    .catch((err) => console.log(err.message))
};

export const getCheracter = (url, salvaDado) => {
    axios.get(url)
    .then((res) => {
        salvaDado(res.data)
    })
    .catch((err) => console.log(err.message))
};

export const getPlanet = (url, salvaDado) => {
    axios.get(url)
    .then((res) => {
        salvaDado(res.data)
    })
    .catch((err) => console.log(err.message))
}


// ******************************************************************************************************