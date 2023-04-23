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
                                <div id="sec-a">SEC-A</div>
                                <div id="sec-b">SEC-B</div>

                            </div>
                            <div id="dash-cont">
                                <div id="dash-cont-staff">
                                    <div id="dash-cont-st">
                                        <div id="staff-list">
                                            <table cellSpacing="0" cellPadding="0" id="staff-table">
                                                <thead>
                                                    <tr>
                                                        <th>Subjects</th>
                                                        <th>Staff</th>
                                                        <th>Points</th>
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                <tr>
                                               
                                                <td>AI</td>
                                                <td>Barveen</td>
                                                <td>80</td>
                                               
                                                </tr>
                                                <tr>
                                               
                                                <td>DS</td>
                                                <td>Manikandan</td>
                                                <td>85</td>
                                               
                                                </tr>
                                                <tr>
                                               
                                                <td>CD</td>
                                                <td>Shanmugapriya</td>
                                                <td>80</td>
                                                
                                                 </tr>
                                                 <tr>
                                               
                                                <td>IP</td>
                                                <td>Issac</td>
                                                <td>80</td>
                                                
                                                 </tr><tr>
                                               
                                               <td>MC</td>
                                               <td>Faizal</td>
                                               <td>80</td>
                                               
                                                </tr>
                                                <tr>
                                               
                                                <td>IP LAB</td>
                                                <td>Manikandan</td>
                                                <td>80</td>
                                                
                                                 </tr>
                                                 <tr>
                                               
                                                <td>MAD LAB</td>
                                                <td>Getsi</td>
                                                <td>80</td>
                                                
                                                 </tr><tr>
                                               
                                               <td>PC</td>
                                               <td>Jeevanantham</td>
                                               <td>80</td>
                                               
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="dash-count">
                                        <div id="dash-att-count">
                                            <div id="att">
                                                <div id="att-top">

                                                </div>
                                                <div id="att-cont">

                                                </div>
                                            </div>
                                        </div>
                                        <div id="dash-natt-count">
                                            <div id="natt">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="dash-print">
                                    <button id="print">Download PDF</button>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    </>)
}
export default AdminLayout;