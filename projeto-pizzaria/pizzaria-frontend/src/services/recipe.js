import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createRecipe = (body, clear, setIsloading) => {
    setIsloading(true)
    axios.post(`${BASE_URL}/pizzaria/`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert(res.data.message)
        clear()
        setIsloading(false)
    })
    .catch((err) => {
        setIsloading(false)
        alert(err.response.data.message)
    })
}

export const removeRecipe = (id) => {
    axios.delete(`${BASE_URL}/deletar-receita/${id}`, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        console.log("ok")
        alert(res.data.message)
    })
    .catch((err) => {
        console.log("erro")
    })
}