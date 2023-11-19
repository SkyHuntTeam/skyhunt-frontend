//import {useState} from 'react';
import {Register} from './Register';
import {Login} from './Login';
import {Home} from "./Home";
import {Mainp} from './Mainp';
import {Results} from './Results';
import './App.css';
import { BrowserRouter, Route, Routes, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Login/>}/>
//         <Route path="register" element={<Register/>}/>
//       </Route>
//   )
// )
function App() {  
  return(
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="main" element={<Mainp/>}/>
        <Route path="results" element={<Results/>}/>

      </Routes>
    </main>
     </BrowserRouter>
    // <RouterProvider router={router}/>
  );
}



export default App;
