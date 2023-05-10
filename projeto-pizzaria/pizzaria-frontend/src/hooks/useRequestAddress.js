import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";

const useRequestAddress = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user-address`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.address);
      })
      .catch((err) => {
        console.log(err.data.messege);
      });
  }, [url]);

  return data;
};

export default useRequestAddress;
