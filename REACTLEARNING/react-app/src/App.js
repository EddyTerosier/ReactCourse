import { useState } from "react";
import Item from "./Components/Item/Item";

function App() {
  // console.log(useState(10));

  const [monState, setMonState] = useState(10);
  const modifyState = () => {
    setMonState(20);
  };
  const [inputData, setInputData] = useState("Eddy le BG");
  const changeInput = (e) => {
    // console.log(e);
    setInputData(e);
  };
  const [toggle, setToggle] = useState(true);
  const changeState = () => {
    setToggle(!toggle);
  };
  return (
    <div className="App">
      <div className={toggle ? "box animated" : "box"}></div>
      <button onClick={changeState}>Change state</button>
      <Item number={monState} />
    </div>
  );
}

export default App;
