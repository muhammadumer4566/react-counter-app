import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, Setcount] = useState(0);

  const decreaseHandler = () => {
    Setcount(count - 1);
  }

  const increaseHandler = () => {
    Setcount(count + 1);
  }

  const resetHandler = () => {
    Setcount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-orange-500">
      <div className="text-black font-bold text-2xl">Increment & Decrement</div>
      <div className="bg-white flex justify-center text-[25px] text-black rounded-sm
    gap-12 py-3">
        <button onClick={decreaseHandler} className="border-r-2 w-20 text-center border-[#bfbfbf] text-5xl">
          -
        </button>
        <div className="font-bold text-5xl gap-12">
          {count}
        </div>
        <button onClick={increaseHandler} className="border-l-2 w-20 text-center border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="bg-blue-500 text-white px-5 py-2 rounded-sm text-lg">
        Reset
      </button>
    </div>
  )
}

export default App;
