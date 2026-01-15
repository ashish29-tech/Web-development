//mkdir methods-express
//cd methods-express
//npm init -y
//npm i express nodemon
//now create index.js cuz touch index.js doesn't work in window



//sabse pehle npm initialise....npm init -y(sari default value pe yes karne ke liye flag y)
//then packages install...npm i express nodemon...1 se jyada karne the..EX: nodemon bhi karna tha to..nodemon aage likh diya
//then hame entry file pe kaam karna hota hai...i.e javascript file jiska naam generally index.js rakhte hai  
//now in index.js m ham server create karte hai

//express ka server wgr isi index.js file m bnayenge

// const express = require('express'); //require kar liya...and ye function return karta hai
// //now function ke andar jane ke liye function ko run karna padega and run karne pe object milega
// const app = express()//app name ke instance ke sath function ko run kar rha hai. Run karne baad object milega. And since app naam ka object hai hamare paas...this object is the instance of my application

// //middleware is simply a function...jo har incoming request par chalta hai...dilfek ashiq ki trah hai..har kisi path pe chal jata hai
// // app.use( (req, res)=>{ //1st ya to path de sakte the ya to optional tha...yha nai de rahe isliye sabpe chal rha...2nd was my callback function...is callback function m on every incoming request we have two objects..1st. req ka...2nd res ka 
// //   res.send('<h1>Hi I am middleware</h1>') //agr hame koi response send karne ke liye.
// // })

// //Will it work on /cat/ash ? Yess. In the case of 
// app.use('/cat' ,(req, res)=>{ //yha path specify kar rahe hai. So jab bhi cat path pe request jayegi. In case of middleware...string match ho gyi to..we are atalking about use ki...mtlb path match ho gya to...http://localhost:8080/cat/ash (yha cat path match ho gya)..ye chal jayega
//   res.send('<h1>Hi I am a cat middleware</h1>') //response send karne ke liye. Toh ye nazar ayega. http://localhost:8080/cat/ash 
// })

// // //is app ko kisi ek port number pe listen kar sakte hai
// const PORT = 8080; //8080 port ko PORT var m dal diya and niche use kar liya.
// app.listen(PORT, ()=>{ //yha PORT ko use kar liya
//   console.log(`server is connectd to port: ${PORT}`) //string template literals kar liya
// })

//But whenever we change our codebase we need to restart our server..to avoid this we use nodemon...toh package.json m script m...comma separate kar ke apni start script likh dete hai..."start": "nodemon ./index.js"
//now start server by...npm start


//-------------------------------------

// const express = require('express'); //require kar liya...and ye function return karta hai
// //now function ke andar jane ke liye function ko run karna padega
// const app = express()//app name ke instance ke sath function ko run kar rha hai. Run karne baad object milega. And since app naam ka object hai hamare paas...this object is the instance of my application

// //middleware is simply a function...jo har incoming request par chalta hai...dilfek ashiq ki trah hai..har kisi pe chal jata hai. Ye har ek path ke har ek request pe chal jayega.
//ye har ek path pe har ek request ke liye chalega
// app.use( (req, res)=>{ //1st ya to path de sakte the ya to optional tha...yha nai de rahe isliye sabpe chal rha...2nd was my callback function...is callback function m on every incoming request we have two objects..1st. req ka...2nd req ka 
//   res.send('<h1>Hi I am middleware</h1>') //response send karne ke liye.
// })
// 


// //Top to bottom code ka flow...means yha 'use' wale ko pehle istemaal kar rahe hai.
// //Ye get request, post request, patch, delete koi bhi request ho..har incoming request pe chalega and sirf cat path pe 
// app.use('/cat' ,(req, res)=>{ //yha path specify kar rahe hai. So jab bhi cat path pe request jayegi. In case of middleware...string match ho gyi to..we are atalking about use ki...mtlb path match ho gya to...http://localhost:8080/cat/ash (yha cat path match ho gya)..ye chal jayega. In other words ye har ek request pe /cat path pe chalega
//   res.send('<h1>Hi I am a cat middleware</h1>') //response send karne ke liye. Toh ye nazar ayega. http://localhost:8080/cat/ash. Yha se 1 baar response chala gya
// })


////https://expressjs.com/en/5x/api.html#app.get.method
//app.get(path, callback [, callback ...]) ........application ke andar jab get request bhejenge joki by default ja rahi hai when we don't specify our path...toh path and callback mandatory hai
// //Ye sirf GET request pe chalega means jab bhi get request bhejenge tab ye chalega
//jo bhi path ham batate hai uspe get request jati hai..and callback function chalta hai.
// app.get('/ashish', (req, res)=>{ //GET m jo 1st parameter hai...path wo compulsory hai.
//   res.send("<h2>Hi I am Ashish Ranjan</h2>") //har incoming request pe response send
// })

// //1 client ne request kari server pe use already 1 upar(app.use wale m) resoonse bhej diya toh cycle khtm ho gyi...so dobara response nai bhej sakte mtlb .get wale path pe doabara hit nai hoga and m dobara send request nai bhej sakta..that's why pehle upar wale "use" ke case m "Hi I am a cat middleware" nazar ayega hame yha.
// app.get('/cat', (req, res)=>{ //jab bhi get request aayegi /cat pe
//   //ye nai chalega cuz upar app.use m request and response cycle khatm ho gyi /cat path pe...isliye /cat path pe dobara response nai bhej sakta 
//   res.send('get request from /cat aagyi'); //tab ye send kara denge but still result...Hi I am a cat middleware...ye ayega
// })

//is app ko kisi ek port number pe listen kar sakte hai
// const PORT = 8080; //8080 port ko PORT var m dal diya and niche use kar liya.
// app.listen(PORT, ()=>{ //
//   console.log(`server is connectd to port: ${PORT}`) //string template literals kar liya
// })

//What is request ? when we hit on url. Request is bifurcated in 2 ways... 1. Method...mtlb kon se method se request bheji gai hai GET, POST, PATCH...2. Path.. /cat, /dog

//------------------------------------------------------------------------
//Yha app.use se pehle likh diya app.get. Top to bottom approach chal jayegi.
//Jo pehle aa gya aur jisne response de diya uske aage checking nai hogi..means jo pehle aa gya uska output pehle chla gya.

// const express = require('express'); //require kar liya...and ye function return karta hai
// //now function ke andar jane ke liye function ko run karna padega
// const app = express()//app name ke instance ke sath function ko run kar rha hai. Run karne baad object milega. And since app naam ka object hai hamare paas...this object is the instance of my application

// //middleware is simply a function...jo har incoming request par chalta hai...dilfek ashiq ki trah hai..har kisi pe chal jata hai. Ye har ek path ke har ek request pe chal jayega.
// // app.use( (req, res)=>{ //1st ya to path de sakte the ya to optional tha...yha nai de rahe isliye sabpe chal rha...2nd was my callback function...is callback function m on every incoming request we have two objects..1st. req ka...2nd req ka 
// //   res.send('<h1>Hi I am middleware</h1>') //response send karne ke liye.
// // })

// //YHA app.use se pehle likh diya app.get.
// app.get('/cat', (req, res)=>{ //jab bhi get request aayegi /cat pe
//   res.send('get request from /cat aagyi'); //tab ye send kara denge but still result..ab "get request from /cat aagyi" ye chal jayega
// })

// //Top to bottom code ka flow...means yha 'use' wale ko pehle istemaal kar rahe hai.
// //Ye get request, post request, koi bhi request ho..har incoming request pe chalega and sirf cat path pe 
// app.use('/cat' ,(req, res)=>{ //yha path specify kar rahe hai. So jab bhi cat path pe request jayegi. In case of middleware...string match ho gyi to..we are atalking about use ki...mtlb path match ho gya to...http://localhost:8080/cat/ash (yha cat path match ho gya)..ye chal jayega. In other words ye har ek request pe /cat path pe chalega
//   res.send('<h1>Hi I am a cat middleware</h1>') //response send karne ke liye. Toh ye nazar ayega. http://localhost:8080/cat/ash. Yha se 1 baar response chala gya
// })

// //Ye sirf GET request pe chalega means jab bhi get request bhejenge tab ye chalega
// app.get('/ashish', (req, res)=>{ //GET m jo 1st parameter hai...path wo compulsory hai.
//   res.send("<h2>Hi I am Ashish Ranjan</h2>")
// })


// //is app ko kisi ek port number pe listen kar sakte hai
// const PORT = 8080; //8080 port ko PORT var m dal diya and niche use kar liya.
// app.listen(PORT, ()=>{ //
//   console.log(`server is connectd to port: ${PORT}`) //string template literals kar liya
// })

//-------------------------------------------------------------------------------


//Middleware m ham kbhi bhi response ko send nai karte...res.send()❌(we can but nai bhejte). Middleware is a function. Middleware is a middleman ye 2 chizo ko apas m judwata hai. 


const express = require('express'); //require kar liya...and ye function return karta hai
//now function ke andar jane ke liye function ko run karna padega
const app = express()//app name ke instance ke sath function ko run kar rha hai. Run karne baad object milega. And since app naam ka object hai hamare paas...this object is the instance of my application

//middleware is simply a function...jo har incoming request par chalta hai...dilfek ashiq ki trah hai..har kisi pe chal jata hai. Ye har ek path ke har ek request pe chal jayega.
// app.use( (req, res)=>{ //1st ya to path de sakte the ya to optional tha...yha nai de rahe isliye sabpe chal rha...2nd was my callback function...is callback function m on every incoming request we have two objects..1st. req ka...2nd req ka 
//   res.send('<h1>Hi I am middleware</h1>') //response send karne ke liye.
// })

// //Middleware advance...
// //Jab bhi middleware use karenge...should I send the response ? No. Instead we'll console it.
app.use('/cat' ,(req, res, next)=>{ //Jab is cat pe request gayi...Toh niche path chal jaye. Middleware ke paas 3 argument hote hai....path, cb fun, next
  //yha ham response send nai karte...middleware ke andar response send nai karte
  console.log('Hi I am a cat middleware') //terminal m "Hi I am a cat middleware" aa jayega. 
  next(); //Next means jab upar ka sara kaam...means ye upar ka console ho jaye uske baad agle middleware(function) pe bhej do. And agla function.../cat se match hogi toh niche /cat wale function pe chla jayega and 'get request from /cat aagyi'
})

// //Ye sirf GET request pe chalega means jab bhi get request bhejenge tab ye chalega
app.get('/ashish', (req, res)=>{ //GET m jo 1st parameter hai...path wo compulsory hai.
  res.send("<h2>Hi I am Ashish Ranjan</h2>")
})

app.get('/cat', (req, res)=>{ //upar /cat route pe hit kare...To yeh path chal jaye
  res.send('get request from /cat aagyi'); //tab ye send kara denge but still result..ab "get request from /cat aagyi" ye chal jayega
})


// //Ye error ke liye last m hi rakhna hai..cuz code ka flow top to bottom hota hai...upar rakhenge to error sabme show karne lagega.
// //for all the left over path..jo path hamne nai define kiya uske alawa kisi aur path pe...404 error....with the help of 'use'...not 'get' as taught by samarth bhaiya
app.use((req, res)=>{ //Jab bhi get method ke upar. Req and Res ka object hota hai hamare paas
  res.status(404).send('Page 404 Not Found');
})

// //is app ko kisi ek port number pe listen kar sakte hai
const PORT = 8080; //8080 port ko PORT var m dal diya and niche use kar liya.
app.listen(PORT, ()=>{ //
  console.log(`server is connectd to port: ${PORT}`) //string template literals kar liya
})


//path chahe same ho but if method(GET,POST etc) alag-alag hai toh alag request hai....
