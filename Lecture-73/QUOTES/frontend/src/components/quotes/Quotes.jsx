//isme bs dikhana hai hamara quotes app dikhega kaisa

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Quotes(props) { //jha bhi quotes ko call karenge wha props bhejenge..isliye yha catch kar liya. AllQuotes.jsx se call karwa rahe hai.
  let navigate = useNavigate(); 
  function showQuoteHandler(id){ //
    navigate(`/quotes/${id}`) //id evaluate honi hai
  }

  return (
    <li> {/* jyada honge isliye li */}
      <span>
        <h1>Text: {props.text}</h1>
        <h3>Author: {props.author}</h3>
      </span>
      {/* direct call nai kar sakte...props ki id se args bhej diya..upar id m catch kar liya  */}
      <button onClick={()=> showQuoteHandler(props.id)}>
        View full Quote {/* jaise hi view full quote pe click kare ye show handler chal jaye */}
      </button> 
    </li>
  );
}



export default Quotes;