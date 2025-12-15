
// let div = document.querySelector("div");

// //parent se children
// console.log(div); //isse div mil jayega
// console.log(div.children);// div ke child h1...and uske andar 2 tags hai
// console.log(div.children[0]);
// console.log(div.children[1]);

// let art = document.querySelector("article");

// console.log(art); //article ayega aur usme uske sare child
// console.log(art.children); //HTML collection i.e array cuz child to kitne bhi ho sakte hai
// console.log(art.children.children);//undefined cuz hamne nai btaya kon sa children
// console.log(art.children[0].children);//ab uske andar ka child mil gya
// console.log(art.children[0].children[0].children);// uska bhi children
// console.log(art.children[0].children[0].children[0].children); //paragraph ke niche kuch nai hai...isliye kuch nai aa rha

//----------------------------
// //child se parents
// console.log(div.parentElement); //div ka parent article
// console.log(div.parentElement.parentElement);//article ka parent section
// console.log(div.parentElement.parentElement.parentElement); //section ka parent body
// console.log(div.parentElement.parentElement.parentElement.parentElement); // html


//----------------------------------------------

// let art = document.querySelector("article"); //article selected

// console.log(art.nextElementSibling); //article ke sibling dekhne ke liye....article ke baad div
// console.log(art.nextElementSibling.nextElementSibling);// h1
// console.log(art.nextElementSibling.nextElementSibling.previousElementSibling);// phir se div


//---------------------------------------------------------------------------
//Practice




//div ko select kar rahe hai
// let div = document.querySelector('div')

//children pe ja rahe....
// console.log(div) //div mil gya
// //Browser HTML ko correct karta hai silently. p ko browser ne bhr shift kar diya...Because <p> is not allowed inside <h1>, the browser automatically restructures the DOM.
// console.log(div.children) //div ke andar 2 children hai. 🚫 HTML rule: <h1> cannot contain: <p> <h5> 👉 Heading tags (h1–h6) cannot be nested inside each other....👉 <p> cannot be inside heading
// console.log(div.children[0])
// console.log(div.children[1])


// let art = document.querySelector("article")

// console.log(art)
// console.log(art.children) //ye to array hai hmare liye
// console.log(art.children.children) //undefined cuz hamne btaya nahi kon sa children
// //child kitne bhi ho sakte hai isliye hame indexing ke sath khelna padega
// console.log(art.children[0].children) //0 of children...ab uske andar ka bachha mil gya
// console.log(art.children[0].children[0].children)
// console.log(art.children[0].children[0].children[0].children) //paragrpah m kuch nahi aa rha

//----------------------------------------------------------------------
//parent
//can we go to parent..yes

// console.log(div.parentElement) //div ka parent article hai
// console.log(div.parentElement.parentElement) 
// console.log(div.parentElement.parentElement.parentElement) 
// console.log(div.parentElement.parentElement.parentElement.parentElement) 
// console.log(div.parentElement.parentElement.parentElement.parentElement.parentElement) 


//-----------------------------------------------------------


//niche wala html jo commented hai

// let art = document.querySelector('article')

// console.log(art.nextElementSibling) //article ke baad next element sibling div hai...
// console.log(art.nextElementSibling.nextElementSibling) //uska next element sibling
// console.log(art.nextElementSibling.nextElementSibling.previousElementSibling) //uska previous dekhne ke liye
















