//ye script.js frontend ko control karegi...client se msg bhej rahi hai
//backend ko control index.js karegi
//client frontend hai
//server backend hai
//inke beech m communication to and fro handle karna hai...

//handle karne ke liye and data transmit ke liye we need socket 
const socket = io() //io ko invoke karaya

//chatbox ko id di hai index.html m
$("#chat-box").hide(); //hide kar diya

//jQuery m documnet.querySelector ki jgah ye likhte hai.
$("#send-btn").on('click', ()=>{ //id ke basis pe is send button ko select karna hai...uske upar event lagaya...jab ispe click ho toh ek cb fn run hoga...
  //form floating index.html m id de rakhi hai
   const msgTxt = $("#inp").val();  //msgTxt ko index.html m jo inp id de rakhi hai wha se nikal lenge....yani ki text area ko. document.querySelector ki jgah..$()...  .val() isme function/method hote hai isliye parenthesis


   //pehli baar message aya toh...event..bna tha send-msg ka...and is msg ko backend pe listen kara tha
   //event bnaya hai hamne 'send-msg'
   socket.emit('send-msg', { // socket jo data ko send karta hai uske liye ek keyword use karta hai...isse ye keywords ko bhejta hai..and socket accepts a event...and io bhi event accept karta hai
      msg: msgTxt  //msg jo bhejte hai wo object ki form m hota hai and obj m key:value pair hota hai.
   }) 

   $("#inp").val("") //message bhejne ke baad textarea khali hona chahiye textbox...toh jo input tha uski val ko kar do khali...

}) 


socket.on('received-msg', (data) =>{ //received-msg ko listen karte hai jo backend se bheja message. cb fn hoga. data ko catch kar liya.
  // console.log(data) //print kara lete hai ki aya kya hai data backend se jo bheja hai
  //yha dom manipulation kiya.
  $("#chat").append(`<li><span>${data.id}</span> -> ${data.msg}</li>`) //index.html m ul ko id di chat and yha chat ko catch kiya and append kara liya...ul ke andar li hi hote hai...data m se id and msg ko extract kar liya.
})


//button ko id de di index.html m and yha uspe event lagate hai
$("#login-btn").on('click', ()=>{ //login button pe click karne par...1 cb fn chal jaye.
  const username = $("#username").val() //id dedi user name ki index.html m. .val se value aa jayegi.
  

  socket.emit('login', { //socket ek message bhejne wala hai..ek event bna ke bhejega ki jab login ho jaye toh 1 obj bhej do...jiske andar username pada ho.
    username : username
  })

  //login karne baad..login ko hide kar do
  $("#login").hide()
  $("#chat-box").show() //chatbox ko show kar do
  


  //jaise hi login button press ho toh pehle se given username ko khali kar dena hai
  $("#username").val("") //khali kar do
}) 




