import {useState} from "react"
import Item from "./Components/Item/Item";

function App() {

  // console.log(useState(10));

  const [monState, setMonState] = useState(10);
  const modifyState = () => {
    setMonState(20);
  }
  const [inputData, setInputData] = useState("Eddy le BG");
  const changeInput = (e) => {
    // console.log(e);
    setInputData(e);
  }
  console.log(inputData);
  return (
    <div className="App">
      <h1>Hello state : {monState}</h1>

      <button onClick={modifyState}>Change state</button>
      <input type="text" onInput={e => changeInput(e.target.value)} value={inputData} />
    <Item number={monState}/>
    </div>
  );
}

export default App;
