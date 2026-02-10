import React, { useEffect, useState } from 'react'

function GIthub({username}) { //userName ko destructure kiya cuz change hoga

  //Sabse pehle toh....user naam ka state hoga cuz bhot sari chize change hoti rehti hai...
  //users ki image, followers and following dikha dete hai
  let [user, setUser] = useState({imgUrl:"", followers: 0, following: 0}); //state bna li with the name user...initial value object de diya cuz multiple chize chahiye...isme imgUrl empty string..following and followers..

    //har bande ke liye src, username, following etc change hoti rahegi toh ye milega kaha se..api call karni padegi...api call sideEffects(fetch) se useEffect se karte hai...useEffect is a function...
    useEffect(()=> { ////useEffect is a function..which accepts..a callback function and a dependency array
      // fetch(`https://api.github.com/users/${username}`).then(async function(
      fetch(`https://api.github.com/users/${username}`).then(async function( //yha evaluate kar liya username ko
        res
      ){ //fetch kiya api ko...fetch returns a promise...toh .then lga sakte hai... .then ek function.. .then m kuch response milega...promise return karta hai toh promise milega...but sara nai milta toh..res.json..this also returns a promise toh isko await karenge..and await works with async..
        let data = await res.json(); //is json ki wjah se data mila toh...data var m store kar lete hai
        // console.log(data);
        let {avatar_url, followers, following} = data; //browser console m data aye usme...avatar, followers, following...ye sab object ka part hai toh destructure kar liya
        //user ki value hi toh change karna hai..toh ye jo 3 chize destructure ki hai inhe setUser m dal diya..
        setUser(()=>{ //setUser call kar liya...and directly object toh nai dal sakta toh function run karna padega so that andar wala function chale aur sare kaam karta rahe
          // object return karna chahte hai
          return {
            imgUrl : avatar_url, //imgUrl ke corresponding...avatar_url chahiye..
            followers: followers, //followers ke corresponding...followers chahiye
            following: following //following ke corresponding...following chahiye...
          }
         
        }) 
      });
    }, []); //ye jo dependency array hai isme..generally 2 chize likhte hai...state, props. Agr useEffect ke andar koi state ka istemal kiya hota...toh yha dependency array m user likhte..but hamne use nai kiya toh nahi likhenge..user state hai but hamne use nai kiya is useEffect m toh dependency array m nai ayega


  return (
    // thori css laga dete hai.....external css bhi laga sakte hai App.css m...
    <div style={{border: "2px solid black"}}>
      <img src={user.imgUrl} alt="img" />
      {/* ek figure tag bna diya ke andar ek paragraph */}
      <figure>
        
        <p>Username: {username} </p>  {/* username toh direct prop se mil rha hai...toh sidha username likh dete hai */}
        <p>Followers: {user.followers} </p>
        <p>Following: {user.following} </p>
      </figure>
    </div>
  )
}

export default GIthub