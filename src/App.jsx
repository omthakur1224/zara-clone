import FullPageExample from './components/LandingPage';

import Sliding_navbar from './components/Sliding_navbar';
// // import logo from './logo.svg';
// import './App.css';
// // import Home from './components/Home';

// import React from 'react';

// import LandingPage from './components/LandingPage';

// // import Login from './components/Login';
// // import {useNavigate, Route, Routes} from "react-router-dom"
// // import { useEffect } from 'react';


// export function App() {
 
 
//   return (
//     <div className="App">


// {/* <Routes> 
// <Route path="/" element={<Home />}/> 
//   <Route path="/home" element={<Home />}/> 
//   <Route path="/login" element={<Login/>}/> 
//   <Route path="/landing" element={<LandingPage/>}/> 
// </Routes> */}

    
// <LandingPage />

//     </div>
//   );
// }

// export default App;





import React from 'react';
// import{Route,Routes}from "react-router-dom"
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Login from './Components/Login';
// import Signup from './Components/Signup';


import LandingPage from "./components/LandingPage"


import './App.css';

const App = () => {
  return (
    <>
    {/* <Navbar/>
    <Routes>
    <Route  path="/" element={<Home/>}></Route>
    <Route  path="/login" element={<Login/>}></Route>
    <Route  path="/signup" element={<Signup/>}></Route>
    </Routes>
    {/* <Routes>

    </Routes>
    
    <Route exact path="/"><Contact/></Route>
    <Route exact path="/"><Home/></Route> */}

<Sliding_navbar />
    <LandingPage />
    

    {/* <FullPageExample /> */}
    </>
  );
}

export default App;
