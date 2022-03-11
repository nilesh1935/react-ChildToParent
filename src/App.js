import React,{useState} from "react";
import FancyButton from "./FancyButton.js"
import "./style.css";

export default function App() {
  const [counter, setParentCounter] = useState(0);

  const displayCounter = (couterFromChild) =>{
    setParentCounter(couterFromChild)
  }
  return (
    <div>
      <h1>Hello React</h1>
      <p>{counter}</p>
      <FancyButton buttonText="Increment" incrementCounter={displayCounter}/>
    </div>
  );
}
