
//Just like fs(filesystem)...path bhi ek package hai(see nodeJs docs wahi pe filesystem and path hai).
//so do we need to install path ? No but do we need to require it ? Yess. Jitne bhi module, packaaging hai you can't use them before requiring...exception bhi hai but majorly requiring karna padta hai.

const path = require('path'); //require kar liya. This also gives me an object.

//path m ek method available hai jise we call join. Join method accepts a string.
// let ans = path.join('ashish', 'ranjan'); //join method accepts a string..hover and see. Ye join 2(any number) string ko...ashish/ranjan m convert kar dega..mtlb separation of forward slash. Varible m store kar ke..console kar ke dekhte hai.
// console.log(ans); //terminal m run...ashish/ranjan ye output ayega

//What if kafi sare strings rakh diye ?
// let ans = path.join('I', 'am', 'learning', 'coding', 'not', 'having', 'fun');//kai sare strings de diye. Kya ye sare joins ho jayenge ?
// console.log(ans); //sare join ho jayenge

let ans = path.join('I//', '//am//', '//learning//', '//coding//', '//not//', '//having//', '//fun//');
console.log(ans); // path.join...extra sare slashes ko ignore kar deta hai..sirf 1 slash rakhta hai.





