import '../../styles/admin.css';
import logo from '../../img/logo.png';
import logout from '../../img/logout.png';
import { useState,useEffect } from 'react';
import Dash from './Dash';
import { createRoot } from 'react-dom/client';

const AdminLayout=()=>{
    var [nav,setNav]=useState('dash');
    useEffect(()=>{
        if(nav=="dash"){
           document.getElementById("dash").style="background-color:rgba(141,112,231,1);color:white;";
           document.getElementById("questt").style="background-color:white";
           document.getElementById("resp").style="background-color:white";
           createRoot(document.getElementById('admin-cont-box')).render(<Dash/>);
           createRoot(document.getElementById("admin-cont-top")).render(<><h2>Dashboard</h2></>);

        }   
        else if(nav=="ques"){
            document.getElementById("dash").style="background-color:white";
            document.getElementById("questt").style="background-color:rgba(141,112,231,1);color:white;";
            document.getElementById("resp").style="background-color:white";
            createRoot(document.getElementById('admin-cont-box')).render(<><h1>das</h1></>);
        }
        else if(nav=="resp"){
            document.getElementById("dash").style="background-color:white";
            document.getElementById("questt").style="background-color:white";
            document.getElementById("resp").style="background-color:rgba(141,112,231,1);color:white;";
            createRoot(document.getElementById('admin-cont-box')).render(<><h1>das</h1></>);
            
        }
    })
    return(<>
        <div id="adminpanel" class="box">
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
                        <button>Log out</button>
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