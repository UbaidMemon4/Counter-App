import "./App.css";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const counterFunction = (num) => {
    const updatedValue = counter + num;

    if (updatedValue >= 0) {
      setCounter(updatedValue);
    }
  };

  return (
    <div className="main">
      <h1 className="heading">Welcome To React</h1>
      <div className="counter">
        <button className="but" onClick={() => counterFunction(-1)}>
          -
        </button>
        <h1 className="head">{counter}</h1>
        <button className="but" onClick={() => counterFunction(1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
