import '../../styles/admin.css';
import logo from '../../img/logo.png';
import logout from '../../img/logout.png';
import { useState,useEffect } from 'react';
const AdminLayout=()=>{
    var [nav,setNav]=useState('dash');
    useEffect(()=>{
        if(nav=="dash"){
           


        }   
        else if(nav=="ques"){
           
        }
        else if(nav=="resp"){
           
        }
    })
    return(<>
        <div id="adminpanel" class="box">
            <div id="admin-sidenav">
                    <div id="side-top">

                    </div>
                    <div id="side-cont">
                        <ol>
                            <li>Dashboard</li>
                            <li>Questions</li>
                            <li>Responses</li>
                        </ol>
                    </div>
                    <div id="side-bot">

                    </div>
            </div>
            <div id="admin-cont">
                    <div id="admin-inner">
                        <div id="staff"></div>
                    </div>
            </div>
        </div>
    </>)
}
export default AdminLayout;