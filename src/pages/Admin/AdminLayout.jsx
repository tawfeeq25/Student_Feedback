import '../../styles/admin.css';
import logo from '../../img/logo.png';
import { createRoot } from 'react-dom/client';
import { useState,useEffect } from 'react';
import Dash from './Dash';
import Quest from './Quest';
import Resp from './response';
const AdminLayout=()=>{
    var [nav,setNav]=useState('dash');
    useEffect(()=>{
        if(nav=="dash"){
           document.getElementById("dash").style="background-color:#007EA7;color:white;";
           document.getElementById("questt").style="background-color:white";
           document.getElementById("resp").style="background-color:white";
           createRoot(document.getElementById('admin-cont-box')).render(<Dash/>);
           createRoot(document.getElementById("admin-cont-top")).render(<><h2>Dashboard</h2></>);

        }   
        else if(nav=="ques"){
            document.getElementById("dash").style="background-color:white";
            document.getElementById("questt").style="background-color:#007EA7;color:white;";
            document.getElementById("resp").style="background-color:white";
            createRoot(document.getElementById('admin-cont-box')).render(<><Quest/></>);
           createRoot(document.getElementById("admin-cont-top")).render(<><h2>Questions</h2></>);

        }
        else if(nav=="resp"){
            document.getElementById("dash").style="background-color:white";
            document.getElementById("questt").style="background-color:white";
            document.getElementById("resp").style="background-color:#007EA7;color:white;";
            createRoot(document.getElementById('admin-cont-box')).render(<Resp/>);
            
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