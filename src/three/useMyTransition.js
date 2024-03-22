import { useState } from "react";

function debounced(cb, delay = 20) {
  let timeOutId = null;

  return (...args) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }

    timeOutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

export default function useMyTransition() {
  const [isLoading, setIsLoading] = useState(true);

  function updateState(callback) {
    new Promise((res) => {
      setTimeout(() => {
        const debouncedFn = debounced(callback);
        debouncedFn();
        res();
      });
    }).then(() => {
      setIsLoading(false);
    });
  }

  return [isLoading, updateState];
}
