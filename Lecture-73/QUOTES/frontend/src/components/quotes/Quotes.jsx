//isme bs dikhana hai hamara quotes app dikhega kaisa

import React from 'react';
import { useNavigate } from 'react-router-dom'; //yha import karliya

//yha call hoga toh props ke sath call karega...ye call AllQuotes.jsx m se....
function Quotes(props) { //jha bhi quotes ko call karenge wha props bhejenge..isliye yha catch kar liya. AllQuotes.jsx se call karwa rahe hai.
  let navigate = useNavigate(); 
  function showQuoteHandler(id){ //yha arg ko id m catch kara liya...niche props.id arg bhej diya
    //id mil gayi toh navigate kar sakte hai
    navigate(`/quotes/${id}`) //id evaluate honi hai...navigate kara diya route pe
  }

  return (
    <li> {/* bhot sare...jyada honge isliye li ki form m create karna chah rahe */}
      <span>
        {/* prop.text and prop.author naam se bhej diya */}
        <h1>Text: {props.text}</h1>
        <h3>Author: {props.author}</h3>
      </span>
      {/* direct call nai kar sakte...props ki id se args bhej diya..upar id m catch kar liya  */}
      {/* button pe click kare toh particular wala open ho jaye */}
      {/* yha arrow func bnana padega...props ki id mil jayegi...AllQuotes.jsx se id bhej di hai */}
      {/* view full quote pe click kiya toh showQuoteHandler event chala...toh use navigate(mtlb url change kar dena)...kar diya...navigate(`/quotes/${id}`) url pe...frontend pe */}
      <button onClick={()=> showQuoteHandler(props.id)}>
        View full Quote {/* jaise hi view full quote pe click kare ye show handler chal jaye */}
      </button> 
    </li>
  );
}



export default Quotes;