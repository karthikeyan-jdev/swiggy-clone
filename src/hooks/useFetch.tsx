import { useEffect, useState } from "react";

const useApi = ({ url }: any) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    let isMounted = true;

    setData(null);
    setloading(true);
    setError("");
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ERROR!:${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isMounted) setData(data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message || "API ERROR");
      })
      .finally(() => {
        if (isMounted) setloading(false);
      });
    return () => {
      isMounted = false;
    };
  },[url]);
  return { data, error, loading };
};

export default useApi;
