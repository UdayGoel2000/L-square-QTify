import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

function useFetch(url, initialState, errorHandler) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    fetchData(url, errorHandler).then((extarcteddata) =>
      setData(extarcteddata)
    );
  }, []);

  // return [data, setData];
  return data;
}

export default useFetch;
