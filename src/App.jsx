//import {useState} from 'react';
import {Register} from './Register';
import {Login} from './Login';
import {Home} from "./Home";
import {Mainp} from './Mainp';
import {Results} from './Results';
import './App.css';
import { BrowserRouter, Route, Routes, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

//import  queryClient from './clientProvider/clientProvider';
import { QueryClient, QueryClientProvider } from 'react-query';


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<Login/>}/>
//         <Route path="register" element={<Register/>}/>
//       </Route>
//   )
// )

function App() {  

  const client = new QueryClient();
  return(
    <AuthProvider>
    <QueryClientProvider client={client}>

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
    {/* //<RouterProvider router={router}/> */}

    </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
