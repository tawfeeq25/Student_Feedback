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
                    <div id="dash-inner">
                            <div id="dash-nav">

                            </div>
                            <div id="dash-cont">
                                <div id="dash-cont-staff">
                                    <div id="dash-cont-st">

                                    </div>
                                    <div id="dash-count">
                                        
                                    </div>
                                </div>
                                <div id="dash-print">

                                </div>
                            </div>
                    </div>
            </div>
        </div>
    </>)
}
export default AdminLayout;