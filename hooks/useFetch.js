import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    }

    fetchData(0);
  }, []);

  return [data];
}
