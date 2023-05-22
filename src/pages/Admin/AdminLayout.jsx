import '../../styles/admin.css';
import { createRoot } from 'react-dom/client';
import { useState,useEffect } from 'react';
import Dash from './Dash';
import Quest from './Quest';
import Resp from './response';
import { Link, useLocation } from 'react-router-dom';
const AdminLayout=()=>{
    const location=useLocation();
    console.log(location);
    var [nav,setNav]=useState('dash');
    useEffect(()=>{
        if(nav=="dash"){
           document.getElementById("dash").style="background-color:#007EA7;color:white;";
           document.getElementById("questt").style="background-color:white";
           document.getElementById("resp").style="background-color:white";
           createRoot(document.getElementById('admin-cont-box')).render(<Dash code={location.state.code}/>);
           createRoot(document.getElementById("admin-cont-top")).render(<><h2>Dashboard</h2></>);

        }   
        else if(nav=="ques"){
            document.getElementById("dash").style="background-color:white";
            document.getElementById("questt").style="background-color:#007EA7;color:white;";
            document.getElementById("resp").style="background-color:white";
            createRoot(document.getElementById('admin-cont-box')).render(<><Quest code={location.state.code}/></>);
           createRoot(document.getElementById("admin-cont-top")).render(<><h2>Questions</h2></>);

        }
        else if(nav=="resp"){
            document.getElementById("dash").style="background-color:white";
            document.getElementById("questt").style="background-color:white";
            document.getElementById("resp").style="background-color:#007EA7;color:white;";
            createRoot(document.getElementById('admin-cont-box')).render(<Resp  code={location.state.code}/>);
           createRoot(document.getElementById("admin-cont-top")).render(<><h2>Responses</h2></>);

            
        }
    })
    return(<>
        <div id="adminpanel" className="box">
            <div id="admin-sidenav">
                    <div id="side-top">
                        <h1>ADMIN PANEL</h1>
                    </div>
                    <div id="side-cont">
                        <ol id="main-nav">
                            <li id="dash" onClick={()=>{setNav('dash')}}><p>Dashboard</p>
                               
                            </li>
                            <li id="questt" onClick={()=>{setNav('ques')}}><p>Questions</p></li>
                            <li id="resp" onClick={()=>{setNav('resp')}}><p>Responses</p></li>
                        </ol>
                    </div>
                    <div id="side-bot">
                        <button><Link to="/">Log out</Link></button>
                    </div>
            </div>
            <div id="admin-cont">
                   <div id="admin-cont-top">

                   </div>
                   <div id="admin-cont-box">
                      
                   </div>
            </div>
        </div>
    </>)
}
export default AdminLayout;