import React from 'react'
import { useState } from 'react'
import axios from "axios"; //hamari jo api calling hone wali hai..jo api backend m bnaya hai...un api ki calling frontend se kar rahe hai...
import { useEffect } from 'react';
import Quotes from '../quotes/Quotes';

//frontend m install karenge axios... npm i axios
function AllQuotes() {

  let [quotes, setQuotes ] = useState( [] ); //state bna liya and initial value will be zero...data nahi hoga shuru m fetch karayenge isliye empty array.
  //now our work is ki fetch kar le...api se. axios.get. Toh iske liye axios...npm i axios..frontend m install

  useEffect(function(){ //pehla function kabhi bhi async nahi bnate
    //isme ek aur function bnaya. Is function ko bhr bna sakte hai and andar useEffect function m call kar lenge
    async function getQuotes(){
        //jo bhi data milega use res var m dala
        const res = await axios.get('http://localhost:8000/allquotes'); //kon sa route hit karna hai jisse sare quotes mil jaye....pura link dena padta hai. Axios returns a promise..isliye async and await...but do remember sideEffects are meant to remmber inside useEffect()
        // console.log(res.data, "api ash"); //res.data hame array de rha hai
        setQuotes(res.data); //set kar diya...res.data hame array de rha hai 
    }
    getQuotes(); //callApi ko call kar diya yha pe
  }, []);


  return (
    <div>
      <h1>AllQuotes</h1>
      <ul>
        {/* yha pe show karna hai quotes..quotes array hai toh map karna padega */}
          {quotes.map((quote, index)=>{ //map accepts a cb fn...pehli chiz mera quote kya hai dusri chiz mera text kya hai
            return (
              //key bhej dete hai...key ko unique bnane ke liye id de di
              <Quotes id={quote._id} key={quote._id} text={quote.text} author={quote.author}/> //Quotes ko call kar diya and call karte waqt props bhejne padenge....1 prop text..1 prop author
            )
          })}
      </ul>
    </div>
  );
}

export default AllQuotes;

