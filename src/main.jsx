import React from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/login';

const App=()=>{
  return(<>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
   

        </Routes>
    </BrowserRouter>
  </>)
}
 createRoot(document.getElementById('root')).render(<App/>)

