import React from 'react';

//jaise function call karte waqt args bhejte hai toh parameter m catch karte hai...waise hi
// function Student(props) { // paramaeter m catch kar liya...kisi bhi naam se bula sakte hai...but it's convention to call it props

  function Student({name, favColor, num}) { //Destructure it
  // console.log(props); //browser console m check...object ayega...toh props ek object And object hai toh destructure kar sakte hai
  return (
    <div>
      {/* <h1>Name: ashish</h1>
      <h1>FavColor: black</h1>
      <h1>Number: 9999999999</h1> */}

      {/* Ye dot wali chize calling(App.jsx m call kar rahe hai na) se la pa rahe hai.. */}
      {/* <h1>Name: {props.name}</h1> */}
      <h1>Name: {name}</h1>
      {/* <h1>FavColor: {props.favColor}</h1> */}
      <h1>FavColor: {favColor}</h1>
      {/* <h1>Number: {props.num}</h1>  */}
      <h1>Number: {num}</h1> 
    </div>
  )
}

export default Student;


//so...props objects hote hai unhe destructure bhi kar sakte hai...and destructure ka man nai hai toh props.name aise bhi likh sakte hai

