import { useState } from "react";
import "./App.css";

function App() {
  const tDate = new Date();
  const [step, SetStep] = useState(0);
  const [count, setCount] = useState(step);

  let res;

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    res = result.toDateString();
    return result;
  }

  addDays(tDate, count);

  function handleMinusStep() {
    SetStep((s) => s - 1);
  }
  function handlePlusStep() {
    SetStep((s) => s + 1);
  }
  function handleMinusCount() {
    setCount((c) => c - step);
  }
  function handlePlusCount() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div className="App">
        <div className="step">
          Step: {step}
          <button className="stepBtn-" onClick={handleMinusStep}>
            -
          </button>
          <button onClick={handlePlusStep}>+</button>
        </div>
        <div>
          Count: {count}
          <button onClick={handleMinusCount}>-</button>
          <button onClick={handlePlusCount}>+</button>
        </div>
        <p className="ui">
          {count === 0 && ""} {count > 1 && count}
          {count < -1 && count.toString().slice(1)}
          {count === -1 && "Yesterday was"}
          {count === 1 && " Tomorrow is "}
          {count > 1 && " days from today is"}
          {count < -1 && " days ago was"}
          {count === 0 && " Today is"} {res}
        </p>
      </div>
    </>
  );
}

export default App;
