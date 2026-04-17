import {useEffect, useState} from "react";
export default function useLocalStorage(keyName, initialValue) {

  const [value, setValue]  = useState(() => {
    try {
      const currentLocalStorage = JSON.parse( localStorage.getItem(keyName));
      return currentLocalStorage ?? initialValue;
    } catch {
      return initialValue;
    }

  })

  useEffect(() =>{
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [value]);




   // localStorage.setItem(keyName, initialValue);
  return [value, setValue];
}
