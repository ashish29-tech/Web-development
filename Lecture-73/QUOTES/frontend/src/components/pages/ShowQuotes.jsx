import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

///yha se api request bhejni hai...
//ek particular element ko show karna hai isliye api call

function ShowQuotes() {
  //niche koi var toh hai nahi ki show kar paye..toh var crete karna pada..and var change hota rahega depending on person to person
  let [quote, setQuote] = useState({author: "", text: ""}) //variable set karna padega...ek state bna lete hai taki niche dikha paye. initailly object pe point kara dete hai..
  const params = useParams(); //react-router-dom ne hook diya hai jisse..parameter ko access kar sakte hai...ye hook same hai jaise navigate tha
  //ek particular element ko call karna hai toh..api request bhejni hai...toh useEffect 
  useEffect(()=>{
    async function fetchQuote(){ //function bna lete hai jiska kaam hai fetch karna quotes ko
      //axios call kiya hai toh it returns a promise toh await and async..jo miklega that will be response..
      let res = await axios.get(`http://localhost:8000/quotes/${params.id}`) //api call karni hai toh axios...and is url pe hit karni hai. har baar id badal jayegi toh..direct evaluate nai kar sakte...id parameters m se mil rahi hai frontend m se..frontend m kha se uthayenge ? iske liye ek aur hook hota hai jise useParams() kehte hai...params m se id milegi
      let {author, text} = res.data // response ke andar jo data ayega use destructure..id se bheja hai toh text and author ja rha hoga
      console.log(author);
      console.log(text);
      setQuote({author, text})//jaise hi api fetch hogi set quote kar denge author, text ke sath
    }
    fetchQuote();
  }, []);
  return (
    <div>
      <h2>{quote.text}</h2>
      <p>{quote.author}</p>
    </div>
  )
}

export default ShowQuotes;