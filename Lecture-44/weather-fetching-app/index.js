//https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=7a70812681190434a7ce0cf5a6729f23


let btn_search = document.getElementById('search');
let city_name = document.getElementById("city_name"); //city ka name input m se lena hai toh 
let humidity = document.getElementById("humidity");
let temperature = document.getElementById("temp");
let mintemperature = document.getElementById("mintemp");
let maxtemp = document.getElementById("maxTemp");
let wind = document.getElementById("wind");

console.log(city_name)

//event trigger karenge
//event trigger ke liye eventlistener lagayenge
//jab ham click kare tab ye event perform karana hai and 
btn_search.addEventListener("click", async function(){ //async bna diya cuz abhi data fetch nai hua hai API se
  let city= city_name.value //input ke liye value use karte hai...textContent won't work here
  let data = await fetch( //api se data ane m time lagta hai isliye await to overcome promise
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`
  ) //backticks m karenge so that ham ise input de paye. Ye API JSON data return kar rahi hai.
  
});



















