
//---------------------------------------------------
//Events are actions jiske upar ham koi task perform karte hai
// $('button').click(); //button select kiya uspe click event lga diya...click ke bracket jo bhi function likhna ho we can write

// $('button').click(function(){ //jab bhi is button pe click karu toh Hello world print ho
//   console.log("Hello World")
// })

//-------------------------------------

//click event lagane pe ek function chala denge
//yha jo li select kiya it is equal to querySelectorAll 
//jab bhi event trigger hota hai toh e naam ka object ata hai
// $('ul li').click(function(e){ //ul ke andar li item select karo and unpe click event lga do
//  now we want ki jis li pe click hua hai...wo print ho jaye...ex: one pe click kiya toh one print ho jaye
//  ya us li pe click kare to kuch change nazar aye
//  // console.log(e); //kisi bhi li pe click karenge toh we'll see object ayega browser console m. Us object m target dikhega
//  / console.log(e.target);
//  // e.target.css('color' , 'red'); //target m koi css naam ki property nai hai...so wrong

//   //jQuery wala this keyword..not same as js ka this....jQuery wale this ka mtlb hota hai target...agr one pe click kiya hai to 1 ko point karaega
//   $(this).css('color', 'red') //jispe event trigger hua hai uspe css lga do....$(this) ka mtlb hai jispe event chal rha hai

// }); 


//keyup, keydown chalana hai to
//keyup means press karne ke baad key jab upar ati hai...keydown means ek baar jaba key niche jati hai
// $('input').keyup(function(){ //button ke upar keyup event....keyup hote hi function chalana hai
//   console.log("Hello Ashish");
// })

//---------------------------------------------
//addEventListener ki jagah on event hai yha

// $('button').on('click' , function(){ //button pe click kiya jaye tab 1 function chla do
//  //console.log("Hello");
//  let ans = $('input').val() //input ko select kiya aur uski value show kar di
//  console.log(ans)
//  console.log($('input').val())
// })


//----------------------------------------------
//Effects in jQuery
//inpe on event
$('#fadeIn').on('click' , function(){ //button ko select kiya...since they are all id's toh hash lag jayega. jab bhi in button pe click ho to function run ho jaye
  $('#container').fadeIn() //container ko change karna hai to container select kiya...and iske upar properties(fadeIn, fadeOut)
}) 
$('#fadeOut').on('click' , function(){
  $('#container').fadeOut() 
})  
$('#fadeToggle').on('click' , function(){
  $('#container').fadeToggle() 
}) 


//slideIn, slideOut effects...read docs 

//to do wale project jQuery ki help se kar sakte hai
