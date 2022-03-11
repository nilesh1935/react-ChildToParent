import React, {useState} from "react";


const FancyButton = ({name, incrementCounter}) => {
const [counter, setCounter] = useState(0);

 return (
 <button onClick={()=>{
    setCounter(counter+1);
    incrementCounter(counter +1)
  }}>{name}</button>)
}


export default FancyButton