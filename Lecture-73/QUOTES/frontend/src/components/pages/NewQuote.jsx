import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom" //react-router-dom m se useNaviagte naam ka hook uthaya...jo kisi url pe jane ke kaam ata hai

//input ke liye ham hook ka use karenge...jiska naam useRef()...
function NewQuote() {

    //new quote create karne pe button hit kare toh wo hamare home route pe aa jaye...toh iske liye we have navigate
    let navigate = useNavigate(); //ye useNaviagte ek function lake deta hai

    /* input lena hai uske liye ek hook ka use karenge...useRef()..is hook ka pehle use case is DOM manipulation... */
    /* ye useRef hook kya karega ki jo bhi us particular inpur ki value hogi usko refer karne ke kaam ayega...and is case m rerendering nai hoti...value update bhi kar sakte hai...same kaam useState se karenge toh rerendering ho jayegi */
    /* useRef m ek variable bna denge...and usi varible ko refer kar denge... */
    //2 input hai toh 2 varible le rahe hai
    let usernameInputRef = useRef()
    let quoteInputRef = useRef()

    async function addQuoteHandler(e){ //iska kaam hai ki addQuoteHandler naam ka event trigger ho jaye uske baad ye chale
      //form ka ek default nature hota hai ? Submit ho jana and phir page refresh ho jana
      e.preventDefault(); //react m routing se pehle and baad m refresh nai hona chahiye...toh refresh rokne ke liye
      // console.log(usernameInputRef.current.value); //form submit hone pe value mil jayegi isliye input...value mil jayegi. Ab data mil rha hai toh chizo ko manipulate hi toh karna hai..
      // console.log(quoteInputRef.current.value) ;
      //kya api call kar de yha se backend pe...cuz data mil gya hai...data ko var m store kara dete hai...
      let author = usernameInputRef.current.value; //
      let text = quoteInputRef.current.value;
      //ab api call karn ke liye..try catch
      try{
        //author and text ko bhejte api call kar dete hai
        //api call ke liye...axxios
        let res = axios.post('http://localhost:8000/addquotes', { //axios m post request bhej rahe hai. axios promise return karta hai toh await..jo response milega use await kara lete hai..addquotes wala hit karna hai toh. Object bheja and usme 2 chize bheji
          author, //sath m ek author bhej diya and
          text, //ek text
        }); 
        navigate('/') //function run kar diya...naviagte kar dega slash pe
      }
      catch(e){
        console.log("cannot create a quote")
      }
    }

  return (
    <div>
      {/* we can create new form. Form ultimately submit hone wala hai toh uspe onSubmit event lga dete hai...submit event pe kuch kaam kara sakte hai */}
      {/* submit event pe kuch kaam kara sakte hai...kya kaam karana hai ? push kara de db m... but value bhi toh chahiye hogi...
      toh yha useRef() ka dusra use case samjhenge...1st use case toh dom manipulatek karna hota hai */}
      <form onSubmit={addQuoteHandler}>
        
        <div>
          {/* for ki jagah htmlFor use hota hai cuz for is reserved keyword for loops */}
          <label htmlFor="naam">Author:</label>
          <input type="text" placeholder="Author's Name" id="naam" ref={usernameInputRef} />
        </div>
        <div>
          <label htmlFor="naam">Author:</label>
          <textarea 
          id=""
          cols="30"
          rows="4"
          placeholder="Author's Quote"
          ref={quoteInputRef}
          ></textarea>
          <button>Add Quote</button>
        </div>
      </form>
    </div>
  )
}

export default NewQuote