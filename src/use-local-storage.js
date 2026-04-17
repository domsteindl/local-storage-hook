import {useState} from "react";
export default function useLocalStorage(keyName, initialValue) {

  const [value, setValue]  = useState(() => {
    try {
      const currentLocalStorage = JSON.parse( localStorage.getItem(keyName));
      return currentLocalStorage ?? initialValue;
    } catch {
      return initialValue;
    }

  })




   // localStorage.setItem(keyName, initialValue);
  return useState([]);
}
