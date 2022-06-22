import { useEffect, useState } from "react";
// hi
export default function useLocalStorage(key, defaultValue = {}) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
