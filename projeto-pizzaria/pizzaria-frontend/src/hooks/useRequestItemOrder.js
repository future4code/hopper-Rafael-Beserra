import axios from "axios";
import { useEffect, useState } from "react";

const useRequestItemOrder = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.itens);
      })
      .catch((err) => {
        console.log(err.data.message);
      });
  }, [url]);
  return data;
};

export default useRequestItemOrder;
