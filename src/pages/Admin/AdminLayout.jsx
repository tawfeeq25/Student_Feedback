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
                                               
                                                <td>6,000</td>
                                                <td>110</td>
                                                <td>1.8%</td>
                                               
                                                </tr>
                                                <tr>
                                               
                                                <td>2,200</td>
                                                <td>500</td>
                                                <td>22%</td>
                                               
                                                </tr>
                                                <tr>
                                               
                                                <td>13,500</td>
                                                <td>900</td>
                                                <td>6.7%</td>
                                                
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