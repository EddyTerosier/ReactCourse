import { useState } from "react";
import Item from "./Components/Item";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from "./Components/form"

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">Todo-List</h1>
      <Form/>
    </div>
  );
}

export default App;
