import '../../styles/admin.css';
import logo from '../../img/logo.png';
import logout from '../../img/logout.png';
import { useState,useEffect } from 'react';
const AdminLayout=()=>{
    var [nav,setNav]=useState('dash');
    useEffect(()=>{
        if(nav=="dash"){
            document.getElementById("dash").style="color:#5B25F5;font-weight:bold;";
            document.getElementById("ques").style="color:#9792c7;font-weight:normal;";
            document.getElementById("resp").style="color:#9792c7;font-weight:normal;";


        }   
        else if(nav=="ques"){
            document.getElementById("dash").style="color:#9792c7;font-weight:normal;";
            document.getElementById("ques").style="color:#5B25F5;font-weight:bold;";
            document.getElementById("resp").style="color:#9792c7;font-weight:normal;";
        }
        else if(nav=="resp"){
            document.getElementById("dash").style="color:#9792c7;font-weight:normal;";
            document.getElementById("ques").style="color:#9792c7;font-weight:normal;";
            document.getElementById("resp").style="color:#5B25F5;font-weight:bold;";
        }
    })
    return(<>
       <div id="admincont" className="box">
           <div id="admin-nav">
                <div id="nav-top">

                </div>
                <div id="nav-cont">
                    <ul>
                        <li id="dash" onClick={()=>{setNav('dash')}}>Dashboard</li>
                        <li id="ques" onClick={()=>{setNav('ques')}}>Question</li>
                        <li id="resp" onClick={()=>{setNav('resp')}}>Response</li>
                    </ul>
                </div>
                <div id="nav-bot">
                    <button>Log out</button>
                </div>
           </div>
           <div id="admin-con">
                <div id="admin-top">

                </div>
                <div id="admin-cont">
                    
                </div>
           </div>
       </div>
    </>)
}
export default AdminLayout;