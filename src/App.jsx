import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);
  const addValue = () => {
    setcounter(precounter=> precounter+1);
    setcounter(precounter=> precounter+1);
    setcounter(precounter=> precounter+1);
    setcounter(precounter=> precounter+1);

    console.log("clciked", counter);
  };

  const removeValue = () => {
    if (counter == 0) {
      setcounter(counter);
    } else {
      setcounter(counter - 1);
    }
  };
  return (
    <>
      <h1>React learning </h1>
      <h2>counter value {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button> <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
