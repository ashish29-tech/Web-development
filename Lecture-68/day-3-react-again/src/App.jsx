import React from 'react';
import Person from './Components/Person' //Person component ko aa gya
import Events from './Components/Events'
import Student from './Components/Student'

function App() {
  return  (
    <div>
    {/* <Person/> */}
    {/* <Events/> */}
    {/* <Student/> */}
    {/* 2-3 baar likha to 2-3 baar aa jayega...cuz I can reuse my component */}
    {/* <Student/> */}
    {/* par we want jitni baar use kare utni baar alag-alag values mile. Toh jaise function calling karte waqt args bhej pate hai waise hi yha bhej payenge cuz component bhi toh function hi hai and function ke sath args bhej sakte hai..ise kehte hai props */}
    {/* props ko attribute, args kuch bhi bol lo..but usually props bolte hai */}
    {/* tog yha student ko call karte waqt props/attiributes de diya... */}
    {/* jha pe call kiya jata hai wha props(properties,args) ko bheja jata hai and parameter m catch kar lete hai..Student.jsx m */}
    <Student name="hannu" favColor="green" num="1000"/> 
    <Student name="mani" favColor="red" num="100"/>
    <Student name="bhaskar" favColor="blue" num="1"/>
    
  </div>
  );
}

export default App








