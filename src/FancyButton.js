import React, {useState} from "react";
import PropTypes from 'prop-types';


const FancyButton = (props) => {
const [counter, setCounter] = useState(0);

 return (
   <>
   <button onClick={()=>{
    setCounter(counter+1);
    props.updateCounter(counter + 1)
  }}>{props.buttonIncrementText}</button>

<button onClick={()=>{
    setCounter(counter-1);
    props.updateCounter(counter)
  }}>{props.buttonDecrmentText}</button>
  
   </>
 )
}

FancyButton.propTypes = {
  buttonIncrementText : PropTypes.string,
  buttonDecrmentText : PropTypes.string,
  updateCounter : PropTypes.func
}

export default FancyButton