import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from './Components/Home';
// import Dashboard from './Components/Dashboard';

//is React.lazy m cb fn dete hai. Dashboard ko lazy kar diya...
const Dashboard = React.lazy( () => import("./Components/Dashboard") ); //jis naam se import kara rahe hai us variable ka name....ye React.lazy cb fn accept karta hai...uske andar pura path de diya.
const Home = React.lazy( () => import("./Components/Home") );


function App() {
  return <div>
      <BrowserRouter>
       <Routes>
        {/* path m ek route rooute hai.. and 2nd dashboard...toh ye 2 path bna diye */}
        <Route path="/" element={ 
          //direct render nai karate..suspense naam ke component m karate hai. Suspense means...jab tak mai apne home wale component ko load nai kara leta tab tak fallback source chalta hai
          <Suspense fallback="loading...1...">
          <Home/>
          </Suspense> 
         }
         />
        <Route path="/dashboard" element={ 
          <Suspense fallback="loading...2...">
          <Dashboard/>
          </Suspense>
           }
           />
       </Routes>
      </BrowserRouter>
    </div>
  
};

export default App