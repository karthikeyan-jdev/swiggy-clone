import { useEffect, useState } from "react";

// type myFunType = () => Promise<any>;

export default function useLocalApi<T>(localFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    localFunction()
      .then((res) => {
        if (isMounted) setData(res);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [localFunction]);

  return {
    data,
    loading,
  };
}
