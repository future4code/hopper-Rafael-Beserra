import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const useUnprotectedPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    axios
      .get(`${BASE_URL}/user/logged`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.login === "LOGGED") {
          setData(res.data.login);
        } else {
          setData(res.data.login);
          goToLoginPage(navigate);
        }
      })
      .catch((err) => {
        console.log(err.data.login);
      });
  }, [navigate]);
  return data;
};

export default useUnprotectedPage;
