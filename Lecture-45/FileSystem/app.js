
//FileSystem
//Used for storing data. Earlier DB were not used predominantly. We were dependent on filesystem. 
//But there were several issues with filesystem. Major problem was redundancy. That's why we had to switch to DB in order to have CRUD FUNCTIONALITY.
//Filesystem kha milta hai ? It's a type of module/package(piece of code jo kisi ne likha hai). So ise intall karna padega.
//When we install node.js...sath m filesystem ata hai...no need to install filesystem.

//Module: 3rd party code written by some baba. Jab use...use karna hota hai to use require karna hota hai...kuch-kuch ko install bhi karna padta hai.
const fs = require('fs'); //filesystem(fs) ko require kar liya apne nodejs ki help se and name de diya fs. Jitni bhi functionalities/power hame filesystem deta hai use fs name se use kar payenge. Ye hame ek object deta hai...toh ham .(dot) notation lga sakte hai. Not compulsory that we'll get an object...sometimes...functions, string..etc...it's dependent on require kis chiz ko kar rhe hai.

//Module and Package same hota hai.
//API/End point: Ek URL hota hai...jo data la kar deta hai. It has nothing to do with filesystem. 
//API URL ko hit karne ke tarike ko AJAX kehte hai. AJAX is a technique.
//Module/Package ko use karne ke liye use istemal karna padta hai...

//DOUBT SOLVE, BAKAITI, MOTIVATION

//Library vs. Framework
//Library is flexible. Jquery, React
//Framework are rigid... code write according to rules. Express, Bootstrap, Angular

//API vs AJAX
//API: An endpoint
//API (Application Programming Interface) is a set of rules that allows one software application to communicate with another.
//APIs are usually created on the backend and provide data or services.
//Examples of APIs: GET /users......POST /login
//An API endpoint is the specific URL + HTTP method where a request is sent to access an API. GET https://api.example.com/users.....POST https://api.example.com/login. /users is the endpoint. GET and POST are HTTP methods
//AJAX (Asynchronous JavaScript and XML) is a frontend technique used to send and receive data from a server without reloading the web page.
//AJAX is used to call APIs. AJAX itself is not an API

//An API provides data or services from the server, AJAX is a technique used on the frontend to call those APIs asynchronously, and an API endpoint is the specific URL where the request is sent.


//Process in nodejs. When we work on nodejs...us kaam ki a to z sari info....are stored in this process naam ka object...

//MDN or w3school....to read docs.











