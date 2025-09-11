import { useEffect, useState } from "react";

export const REMOUNT_EVENT = "remount-component";

export const useRemount = () => {
  const [remountKey, setRemountKey] = useState(0);

  useEffect(() => {
    const handleRemount = () => {
      setRemountKey((prevKey) => prevKey + 1);
    };

    window.addEventListener(REMOUNT_EVENT, handleRemount);

    return () => {
      window.removeEventListener(REMOUNT_EVENT, handleRemount);
    };
  }, []);

  return remountKey;
};
