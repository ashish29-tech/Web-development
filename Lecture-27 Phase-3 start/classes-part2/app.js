
//Class syntax is syntactical sugar(another name) of constructor function.
//constructor function object bnata/create tha jab bhi new keyword se call karte the

// class Person {
//   constructor(naam, umar){
//     this.username = naam;
//     this.age = umar;
//   }
//   printName(){ //printName ka function jo console kar rha
//     console.log(`my name is ${this.username}`) //print kar rahe hai return nahi kar rahe isliye sath m undefined bhi hai
//   }
//   getName(){
//     return `naam is ${this.username}`
//   }
// }

// let person1 = new Person('ashish', 120) //argument le liya
// console.log(person1); //Object aya
// console.log(person1.printName())
// console.log(person1.getName())


//jab ham class syntax use karte hai to we call ..ki inke andar ho rahi hai inheritance. In other words class syntax se inheritance use kar sakte hai
//

//-------------------------------------------------
// Example: We have student class. Is class m jo person naam ki class thi wahi same 
//Not one of the good way but correct
class Person{
  constructor(naam, umar){
    this.username = naam;
    this.age = umar;
  }
  printName(){
    console.log(`my name is ${this.username}`) //isme se kuch bhi return nai ho rha isliye sath m undefined bhi aa rha
  }
  getName(){
    return (`naam is ${this.username}`)
  }
}

class Student{
  constructor(naam, umar){
    this.username = naam;
    this.age = umar;
  }
  printName(){
    console.log(`my name is ${this.username}`) //isme se kuch bhi return nai ho rha isliye sath m undefined bhi aa rha
  }
  getName(){
    return (`naam is ${this.username}`)
  }
}

let person2 = new Student ('akash', 23); //class ko call kiya argument bheja...jo bhi object milega use person2 m dala and niche print kar diya
console.log(person2); //console m check...getName and printName prototype m hai

//----------------------------------------------------
// efficient way
//constructor and method dono inherit ho rahe hai
// class Person{
//   constructor(naam, umar){
//     this.username = naam;
//     this.age = umar;
//   }
//   printName(){
//     console.log(`my name is ${this.username}`) //isme se kuch bhi return nai ho rha isliye sath m undefined bhi aa rha
//   }
//   getName(){
//     return (`naam is ${this.username}`)
//   }
// }

// class Student extends Person{ //person wali sari property extract kar li using extends. Mtlb ek student class bnai aur wo person wali class ki sari property ko apne andar inherit kar rahi hai
//   constructor(naam, umar, rollNo){ //naam and umar upar person class se aa rahe hai..ho sakta hai class ke paas ek extra property ho .ie rollNo
//     // this.username = naam; //upar likha hai isliye nai likhenge instead super use karenge
//     // this.age = umar; //upar likha hai isliye nai likhenge instead super use karenge 
//     super(naam, umar) //super mtlb iske(student) parent wali class m jao and jo-jo chiz chahiye use mention kar do
//     this.rollNumber = rollNo; //jo nai value add karni thi uske liye this.
//   }
//   printName(){ //print naam ka function upar defined hai. kya yha pe same naam ka function create kar sakte hai ?
//     console.log(`ka hua ${this.username}`) //function ki value ko vhange kar diya
//   }
//   alag(){ //alag se chahe to method bna sakte hai
//     console.log('mai hu alag');
    
//   }
// }

// let person3 = new Student ('mani', 23, 73); //class ko call kiya argument bheja...jo bhi object milega use person2 m dala and niche print kar diya
// console.log(person3); //console m...object create hua and see...prototype class student and us student ka bhi ek prototype hai jisme class person aa rakha hai 
// console.log(person3.printName()); //Override kar liya aur niche wala printName chala hai. Hence same naam se method override ho jata hai. kuch return nai kar rahe isliye sath m undefined
// console.log(person3.alag()); //kuch return nai kar rahe isliye sath m undefined

//so agr dusre class ki help se class ko create karna hai to extends keywords ka use karenge and it herit all properties.




