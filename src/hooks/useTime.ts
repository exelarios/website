import { useEffect, useMemo, useState } from "react";

function useTime(refreshRate: number) {
  // Set the default value as `Date.now()`
  // causes hydration issues of mismatch text.
  const [value, setValue] = useState<number>(0);
  
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
  }, [refreshRate]);

  const currentTime = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(value);
  }, [value]);

  return value ? currentTime : "00:00";
}

export default useTime;
