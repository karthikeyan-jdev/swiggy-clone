import { useEffect, useState } from "react";

// type myFunType = () => Promise<any>;

export default function useLocalApi(localFunction: () => Promise<any>) {
  const [data, setData] = useState<any[] >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    localFunction()
      .then((res) => {
        if (isMounted) setData(res);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      })
      return()=>{isMounted=false}
  }, [localFunction]);

  return {
    data,
    loading,
  };
}
