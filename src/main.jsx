import React from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/login';
import AdminLayout from './pages/Admin/AdminLayout';
import Feed from './pages/Feedback/feedback';
const App=()=>{
  return(<>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin" element={<AdminLayout/>}/>
          <Route path="/feedback" element={<Feed/>}/>
        </Routes>
    </BrowserRouter>
  </>)
}
 createRoot(document.getElementById('root')).render(<App/>)

