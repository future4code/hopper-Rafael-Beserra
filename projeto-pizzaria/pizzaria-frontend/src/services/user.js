import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToHomePage, goToRegisterPage } from "../routes/coordinator";

export const login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToHomePage(navigate);
    })
    .catch((err) => {
      alert(err.response.data.messege);
    });
};

export const singUp = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToRegisterPage(navigate);
    })
    .catch((err) => {
      alert(err.response.data.messege);
    });
};

export const singUpAddress = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/signup/register-address`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      clear();
      goToHomePage(navigate);
    })
    .catch((err) => {
      alert(err.response.data.messege);
    });
};
