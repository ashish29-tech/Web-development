
//ES6 Echma Script 6 se pehle class syntax nahi hota tha.
//class syntax nahi hota tha to private members kaise bnate the...with the help of closure
//class syntax is a syntactical sugar(lepa poti/makhan lagana/easier way/another way of writing) of constructor function...so class syntax wahi constructor function hai



//Constructor function
// function Person(naam, umar){
//   this.username = naam;
//   this.age = umar;
// }

// Person.prototype.getFullName = function(){ //person naam ka hai isliye person.prototype...ab isko ek function bna denge
//   return(`Naam is ${this.username}`)
// }

// Person.prototype.printName = function(){ 
//   console.log(`my name is ${this.username}`)
// }

// let person1 = new Person("ash", 124); //call kiya to 
// console.log(person1); //iska output console m expand karenge and we'll find 2 method(getFullname, printname) dikh rahe hai
//Console m
//person1.getFullName(); //'naam is ash' print hoga
//person1.printName(); // my name is ash and undefined..undefined becoz printName directly print kar rha return nai kar rha...and by default undefined is returned.


//Ab same upar wala kaam karenge with the help of class syntax
//sam rule hota hai...1st letter Capital

class Person{ //class bna diya
  constructor(naam, umar){ //upar se pura function uthaya and paste...and since Person naam se class bna hai to function Person ki jgah constructor likh diya
  this.username = naam;
  this.age = umar;
  }
  printName(){ //jaise constructor function m method tha waise hi yha..
    console.log(`my name is ${this.username}`)
  }
  getFullName(){
    return(`Naam is ${this.username}`)
  }
}
//this...yha niche jo object hai usko refer karta hai
let person2 = new Person("abhishek", 124); //jaise constructor function ko call karte hai same waise hi class ko call karna padta hai new keyword ke sath
console.log(person2);

















