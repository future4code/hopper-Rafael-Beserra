import { useState } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useEffect } from "react";

const useRequestOrderHistory = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/historico-de-pedidos`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.orders);
      })
      .catch((err) => {
        console.log(err.data.message);
      });
  }, [url]);
  return data;
};

export default useRequestOrderHistory;
