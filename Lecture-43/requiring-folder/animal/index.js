
//cat and dog se jo export kiya hai yha require kar lete hai

const dog = require('./dog'); //require kar liya and require m path dena hota hai
const cat = require('./cat');

// module.exports = {} //pehle by default empty object ja rha tha
module.exports = "ash"

// module.exports = "ash" //now ye ash ja/export ho rha hai...

//Whenever we require any folder then the index.js file inside that folder is responsible 
//for the export of it....mtlb index.js m se jo export ho rha hoga wo mana jayega...what if index.js ki file na ho ? Then it will throw an error.
//so it's compulsory to have a index.js file

//----------------------------------------------------------
//now dog and cat ko export karte hai

module.exports = {cat, dog} //object ke andar object ayega isse 












