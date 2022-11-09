import {useState} from "react"
import Item from "./Item"


function App() {

  // console.log(useState(10));

  const [monState, setMonState] = useState(10);
  return (
    <div className="App">
      <h1>Hello app react</h1>
      <input type="texte" />
      <br/>
      {true ? 1000 : "abc"}
      <Item />
      {monState}
    </div>
  );
}

export default App;
