import { useEffect, useMemo, useState } from "react";

function useTime(refreshRate) {
  const [value, setValue] = useState(Date.now());
  
  useEffect(() => {
    if (typeof window == undefined) {
      return;
    }

    const interval = setInterval(() => {
      setValue(Date.now());
    }, refreshRate);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const currentTime = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(value);
  }, [value]);

  return currentTime;
}

export default useTime;