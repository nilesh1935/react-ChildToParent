import React, {useState} from "react";
import PropTypes from 'prop-types';


const FancyButton = (props) => {
const [counter, setCounter] = useState(0);

 return (
 <button onClick={()=>{
    setCounter(counter+1);
    props.incrementCounter(counter + 1)
  }}>{props.buttonText}</button>)
}

FancyButton.propTypes = {
  buttonText : PropTypes.string,
  incrementCounter : PropTypes.func
}

export default FancyButton