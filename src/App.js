import React,{useState, useCallback} from "react";
import FancyButton from "./FancyButton.js"
import "./style.css";

export default function App() {
  const [counter, setParentCounter] = useState(0);

  const displayCounter = useCallback((couterFromChild)=>{
    setParentCounter(couterFromChild)
  },[])
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{counter}</p>
      <FancyButton name="Increment" incrementCounter={displayCounter}/>
      
    </div>
  );
}
