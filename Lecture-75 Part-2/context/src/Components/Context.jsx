import React, { createContext } from 'react'

//ek component bnaya Context.jsx and isme createContext naam ke function ko run kiya..ye teleporting ka kaam karta hai.
//Teleporting mtlb top se yha niche jana tha toh....beech ka hat jayega and kisi bhi level upar se kisi bhi level niche tak...jo bhi context bnaya hai us context/prop ka use kar sakte hai.
//createContext is a function...and ye initial value rakhega...count ka
//pehla kaam hota hai context create karna
//createContext ka 0th initial value and countContext naam se context bnaya hai..and export kar diya
//countContext...parent ke upar wrap karna hota hai..mtlb parent tak wo maximum jayeaga...
//CountContext varibale ka name hai jis naam se createContext ko teleport karenge...
export const CountContext = createContext(0); //teleporting ka kaam karta hai. countContext naam se bnaya hai and ise export kar diya hai.