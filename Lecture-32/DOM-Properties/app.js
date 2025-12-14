// DOM properties on HTML

//Any of the 5 ways can be used to select

//querySelector

let p = document.querySelector("p")

//innerText --> brainful --> this can read css. Yha value mil rahi thi mtlb getter. And setter ka bhi kaam kar rha hai.
console.log(p.innerText); //p ke andar kya likha hai

//textContent --> brainless -->can't read CSS. Yha value mil rahi thi mtlb getter. And setter ka bhi kaam kar rha hai.
console.log(p.textContent);

//innerHTML --> brainful reads CSS + shows the Tags too. Tag and styling sath m ate hai. Yha value mil rahi thi mtlb getter. And setter ka bhi kaam kar rha hai.
console.log(p.innerHTML)

//------------------------------------------------
//can all 3 act like setter as well ? Yess
//
p.innerText = "hello I am bhaukali baba"

p.textContent = "hello I am bhaukali baba"

p.innerHTML = "hello I <h1>am bhaukali</h1> baba"










