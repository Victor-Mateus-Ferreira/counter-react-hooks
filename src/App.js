import React, { useContext } from 'react';
import './App.css';
import useCounter from './hooks/useCounter';

function App() {
  const { numerShuffle } = useContext();
  return (
    <div className="App">
      <useCounter  value={numerShuffle} />
    </div>
  );
}

export default App;
