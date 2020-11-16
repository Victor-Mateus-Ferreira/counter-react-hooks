import { useState, useEffect } from 'react';

const useCounter = () => {
  const [numberShuffle] = useState(0);
  useEffect(() => {
    setInterval(() => {numberShuffle === Math.floor(Math.random() * (100 - 1) + 1 )}, 10000)
  },[numberShuffle])
  return numberShuffle;
}

export default useCounter;