import { useState } from "react";

function Counter() {
  const [history, setHistory] = useState([0]);
  const [position, setPosition] = useState(0);

  const currentValue = history[position];

  const addValueToHistory = (newValue) => {
    const newHistory = history.slice(0, position + 1);
    setHistory([...newHistory, newValue]);
    setPosition(position + 1)
  }

  const decrement = () => addValueToHistory(currentValue - 1); 
  const increment = () => addValueToHistory(currentValue + 1); 
  
  const undo = () => {
    if(position > 0){
        setPosition(position - 1);
    }
  }

  const redo = () => {
    if(position < history.length - 1){
        setPosition(position + 1);
    }
  }

  console.log(history, position);

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-7xl font-bold">Counter with Undo/Redo</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="text-7xl mt-3 font-bold">{currentValue}</div>
      </div>
      <div className="flex mt-5 gap-4">
        <button onClick={decrement} className="flex justify-center bg-gray-200 w-10 rounded-md cursor-pointer">-</button>
        <button onClick={increment} className="flex justify-center bg-gray-200 w-10 rounded-md cursor-pointer">+</button>
      </div>
      <div className="flex mt-5 gap-4">
        <button onClick={undo} disabled={position === 0} className="flex justify-center bg-teal-200 w-15 rounded-md cursor-pointer disabled:bg-gray-400">Undo</button>
        <div className="text-sm">
            {position + 1} / {history.length}
        </div>
        <button onClick={redo} disabled={position === history.length - 1} className="flex justify-center bg-teal-200 w-15 rounded-md cursor-pointer disabled:bg-gray-400">Redo</button>
      </div>
    </div>
  );
}

export default Counter;
