//import {useState} from 'react';
import {Register} from './Register';
import {Login} from './Login';
import {Home} from "./Home";
import {Mainp} from './Mainp';
import {Results} from './Results';
import {Plane} from './Plane.page'
import './App.css';
import { QueryClientProvider,  QueryClient } from 'react-query';
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
  const queryClient = new QueryClient()
  return(
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="main" element={<Mainp/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path='/results/:planeId' element={<Plane/>}/>
      </Routes>
    </main>
     </BrowserRouter>
    {/* <RouterProvider router={router}/> */}
    </QueryClientProvider>
  );
}



export default App;
