import { useState, useEffect } from 'react';

const useCounter = () => {
  const [numberShuffle, setNumberShuffle] = useState(0);
  return useEffect(() => {
    setInterval(() => setNumberShuffle(Math.floor(Math.random() * (100 - 1) + 1 ), 10000))
  },[numberShuffle]);
}

export default useCounter;