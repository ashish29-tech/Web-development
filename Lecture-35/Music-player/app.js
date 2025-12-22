//font-awesome se button utha liya





// let playBtn = document.getElementById('play-btn');
// let progress = document.getElementById('progress');
// let songList = document.getElementById('song-list');



// //we have 4 songs...but can be 40 as well. so we'll make a array
// //just like promise is a constructor function...audio constructor is also. Read mdn for more info.
// let songs = [
//   { //4 song ke sath 4 object cuz hame unki id bhi chahiye
//     name:'song1',
//     id:1
//   },
//   {
//     name:'song2',
//     id:2
//   },
//   {
//     name:'song3',
//     id:3
//   },
//   {
//     name:'song4',
//     id:4
//   }  
// ]

// let audio = new Audio('./assets/song1.mp3'); //audio constructor..Read mdn for more info.

// //now show the song list in the UI

// //array pe loop 
// for(let song of songs){
//   let li = document.createElement('li');//har gane ke liye li
//   li.innerText = song.name; //jo gaana hai uspe gaane ka naam show ho. songs m jo iterator hai wo 1-1 kar ke pure object(ye jo upar let songs array m object bnaya hai) ko point kar rha hai...object ke andar ki property chahiye hogi to . lga ke..like song.name, song.id
//   li.setAttribute('id' , song.id);//id bhi set karni hai uske liye setAttribute property...isme pehle kon sa attribute lena hai wo..2nd attribute set kar deta hai
//   li.classList.add('song-item'); //song list ki styling ke liye...dynamic class add kar di..and us class ke base pe style kar dena hai
//   songList.append(li); //list(li) ko append kar diya songList ke andar
// }

// //play button ka icon change acc to play and pause 

// playBtn.addEventListener('click' , ()=>{ //click event listener..and function
//   //2 scenarios ho sakte hai ya to song pehle se chal rha hoga ya to nai chal rha hoga
//   audio.paused ? audio.play() : audio.pause(); //ya to element(audio) pause hoga ya nai..pause hoga to play wrna audio ko pause
//   if(playBtn.children[0].classList.contains('fa-play')){ //<!--button ke upar event ho rha hai...button ka child hai i..i ki class badalni hai-->. playBtn ka chikdren hai..on [0]th node..agr wo classlist contain karta hai..fa-play(class ka naam)
//     playBtn.children[0].classList.remove('fa-play')//fa-play ko remove kar do
//     playBtn.children[0].classList.add('fa-pause')
//   }
//   else{
//     playBtn.children[0].classList.remove('fa-pause')
//     playBtn.children[0].classList.add('fa-play')
//   }
// }); 

// //now we want ki current time ke according range chale gane ki
// //visit time update event mdn...jab tak current time on hai and change ho rha hai tab tak timeupdate event fire ho rha hai
// //timeupdate gaane ke upar ho rha hai aur gana kya hai...audio
// //toh audio ke upar event lga sakte hai



// audio.addEventListener('timeupdate' , function(){
//   let currentProgress = audio.currentTime * 100 / audio.duration; // //200s audio ka currenttime/600s duration * 100 range = 33%...mtlb gaane ki current progress ye hai
//   progress.value = currentProgress; //currentProgress input ki value pe lagegi...progress ko value de di 
// })
// //open input range w3school
// //html m hamne range le rakha hai..so let's see range ki by default value kya hoti hai
// //default range is 0-100...mtlb jaise-jaise gana badhega wo % complete karta jayega


// //now we want drag karne se gaana chale
// //mtlb input ko change kar rahe hai
// //chnage ho rha hai to dusra wala formula...Duration * progress ki value jo change karne se mile / range = curentTime....
// progress.addEventListener('change' , function(){ //progress hamara input hai uspe event add kar rahe hai...'change' is an event here.
//   let updatedTime = audio.duration * progress.value / 100;  //duration divided by 100 * progress...isse updated time/current time mil jayega
//   audio.currentTime = updatedTime;
// }) 

// //different gaana pe click kare and wo chal jaye
// songList.addEventListener('click', function(event){//songList pe event lagega...jab bhi click kare...function chal jaye. Jab bhi function trigger hota hai 1 event naam ka object hamare paas hota hai
// let songId = event.target.getAttribute('id'); //event naam ke object se uska target nikal sakte hai...target se element mil jaega...element se attribute nikal lenge...id attribute. Isse gaane ki id mil jayegi. Id mil jayegi to pta chal jayga kon sa song chal rha hai.
// audio.src = `./assets/song${songId}.mp3`;//now we can change the source of the song. Id m upar song ko id 1, 2, 3 di hui hai. song 1,2,3,4 to variable hai..ye songId se mil jayega...last m .mp3....isko evaluate karna hai to backticks
// audio.currentTime = 0; //upar se src badla to curentTime ko 0 kar dena hai...gaana chalta hai to starting se chalta hai
// audio.play(); //audio ko play kar do
// playBtn.children[0].classList.add('fa-pause'); //jaise hi gaana badla to play/pause apne aap shi ho jane chahiye...jaise hi gaana badla waise hi classList m play aa jana chahiye..pause renmove ho jana chahiye if pausse hai to. Add ho jayga pause...pause ka option dikhana hai
// playBtn.children[0].classList.remove('fa-play'); //remove ho jaye play..play ka option hta dena hai

// })


//Task
//carasoul ka use karna hai....⏮ ⏭...iske liye...4 ke baad 3 pe image aa rahi thi..3 ke baad 2..2 ke baad 1..
//previous and next functionality ko implement karna hai...using % modulus
//shuffle bhi bna sakte hai..gaana randomly chal jayega...array ki length tak ek random number generate kar do...and us gaane ko source m daal do..mtlb song random number se chal jayega


//-------------------------------------------------------
//HTML

/*
<section id="container">
    <h1>Music Player</h1>
    <!-- <h2>Song Title</h2> -->
    <ul id="song-list">

    </ul>

    <div id="play-section">

      <input type="range"  id="progress">

      <div class="ash">
        <button> <i class="fa-solid fa-backward"></i></button>
        <button id="play-btn"> <i class="fa-solid fa-play"></i></button> <!--button ke upar event ho rha hai...button ka child hai i..i ki class badalni hai-->
        <button> <i class="fa-solid fa-forward"></i></button>
      </div>
      
    </div>

  </section>

*/


//CSS

// /* fontawesome.com se button utha liya */
// /* tidil48510@bizmud.com     Fontawesome@123 */

// button{
//   background: none;
//   border: 0;
//   /* color: grey; */
  
// }

// #progress{
//   cursor: pointer;
// }

// i{
//   font-size: 1.6rem;
//   cursor: pointer;
// }

// #container{
//   width: 360px;
//   height: 500px;
//   margin: 50px auto;
//   text-align: center;
//   position: relative;
//   border: 2px solid black;
// }

// #play-section{
//  position: absolute;
//  bottom: 0;
//  flex-direction: column;
//  display: flex;
//  /* align-items: center; */
//  justify-content: center;
//  align-items: center;
//  padding: 10px 0;
//  /* color: rgb(150, 8, 8); */
 
// }

// .ash{
//   width: 360px;
//   padding: 10px 0;
// }

// .ul{
//   padding:0;
// }

// /* song item ki class */
// .song-item{
//   border: 1px solid black;
//   width: 60%;
//   margin: 10px auto;
//   padding: 5px 0px;
//   border-radius: 20px;
//   cursor: pointer;
//   list-style: none;
// }


// .song-item:hover{
//   background-color: rgb(158, 11, 11);
// }


//js

let playBtn = document.getElementById("play-btn");
let songList = document.getElementById("song-list");
let progress = document.getElementById("progress");

//songs toh kitne bhi ho sakte hai...toh songs ka array bna liya
let songs = [
  //har song ka ek object de rahe hai cuz gaane ke sath-sath unki ids bhi chahiye
  {
    name: "song1",
    id: 1
  }, 
  {
    name: "song2",
    id: 2
  }, 
  {
    name: "song3",
    id: 3
  }, 
  {
    name: "song4",
    id: 4
  }
]

//jaise promise() ek constructor tha...waise hi Audio() bhi hai. Google and read mdn..HTMLAudioElement: Audio constructor()
// Audion constructor use kaise karte hai ? new audio and uske andar url dal dete hai
//variable m store karna hai...and .play()...naam ka method hai...

//link asset ke andar hai na
let audio = new Audio('./assets/song1.mp3') // ./assts/song1.mp3 .....ye new audio ek object return karega use var m store kar liya

//now the task is to show the song list in the UI

//array hai toh array ke upar loop kar sakte hai
for(let song of songs){ //ye song naam ka iterator hai ye ek-ek kar ke upar songs ke pure object ko point kar rha hai
  //har ek gane ke liye ek new li bnana padega cuz song ki list hai
  let li = document.createElement('li') //create element list item create karta hai
  //now we want jo list item hai hamara uspe gane ka naam nazar aye...toh li ke andar texr bharna padega
  //  //ye for loop m song naam ka iterator hai ye ek-ek kar ke upar songs ke pure object ko point kar rha hai and koi property chahiye hogi toh .name, .id .......
  li.innerText = song.name
  //id bhi set karni hai...iske liye setAttribute prop. 
  //id attribute lagana chahte hai...songId pe
  li.setAttribute('id', song.id) //1st ye kon sa attribute lega and 2nd attribute set kar deta hai
  //song list ki styling nai kari toh...dynamic class add kar dete hai...and class ke base pe use style kar denge
  li.classList.add('song-item')
  //song list m list item ko append kar diya
  songList.append(li);
}

//jab play pe click kare toh pause karna ka symbol aye and jab pause pe cick kare toh play ka symbol bna jaye. Mtlb ek event listen karna padega merko
//play btn ka icon badlo and song chalao
playBtn.addEventListener('click', function(){
  //ya toh audio pause hogi ya fir nahi hogi. Paused hai toh play kar do...wrna ultimately pause kar do.
  audio.paused ? audio.play() : audio.pause();
  //sath-sath iske icon bhi badalne hai. icon hai fa-play(html dekh wha hai). Button ke upar event ho rha hai..button ka child hai i...toh hame i ki class badalni hai
  //playBtn ka children 0th node pe..agr wo classList contain karta hai..fa-play
  //mtlb jis button pe maine click kiya hai..uske andar ek child hai i...i ke andar ek class hai...toh we want to check if that is class..
  if(playBtn.children[0].classList.contains('fa-play')){
    //playbtn ke children ke class m jao and remove kar do fa-play ko..and add kar do fa-pause ko
    playBtn.children[0].classList.remove('fa-play');
    playBtn.children[0].classList.add('fa-pause')
  }
  else{
    playBtn.children[0].classList.remove('fa-pause')
    playBtn.children[0].classList.add('fa-play');
  }
})




















