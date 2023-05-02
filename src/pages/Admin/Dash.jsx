import { useState ,useEffect} from "react";
const Dash=()=>{
    const[year,setYear]=useState('one');
    const[sec,setSec]=useState('year-1-a');
    useEffect(()=>{
        if(year=='one'){
            document.getElementById("year-1").style="background-color:#007EA7;color:white;";
           document.getElementById("year-2").style="background-color:white";
           document.getElementById("year-3").style="background-color:white";
           document.getElementById("year-4").style="background-color:white";
           document.getElementById("year1").style="display:flex";
           document.getElementById("year2").style="display:none";
           document.getElementById("year3").style="display:none";
           document.getElementById("year4").style="display:none";
           setSec("year-1-a");
        }
        else if(year=='two'){
            document.getElementById("year-1").style="background-color:white";
            document.getElementById("year-2").style="background-color:#007EA7;color:white";
            document.getElementById("year-3").style="background-color:white";
            document.getElementById("year-4").style="background-color:white";
            document.getElementById("year1").style="display:none";
            document.getElementById("year2").style="display:flex";
            document.getElementById("year3").style="display:none";
            document.getElementById("year4").style="display:none";
           setSec("year-2-a");

        }
        else if(year=='three'){
            document.getElementById("year-1").style="background-color:white";
            document.getElementById("year-2").style="background-color:white";
            document.getElementById("year-3").style="background-color:#007EA7;color:white";
            document.getElementById("year-4").style="background-color:white";
            document.getElementById("year1").style="display:none";
            document.getElementById("year2").style="display:none";
            document.getElementById("year3").style="display:flex";
            document.getElementById("year4").style="display:none";
           setSec("year-3-a");

        }
        else if(year=='four'){
            document.getElementById("year-1").style="background-color:white";
            document.getElementById("year-2").style="background-color:white";
            document.getElementById("year-3").style="background-color:white";
            document.getElementById("year-4").style="background-color:#007EA7;color:white";
            document.getElementById("year1").style="display:none";
            document.getElementById("year2").style="display:none";
            document.getElementById("year3").style="display:none";
            document.getElementById("year4").style="display:flex";
           setSec("year-4-a");

        }
        if(sec=='year-1-a'){
            /*
            document.getElementById("year-1-a").style="border-bottom:2px solid rgba(141,112,231,1);color:rgba(141,112,231,1);";
            document.getElementById("year-1-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-b").style="border:none;color:rgb(100, 93, 122)";
            */

        }
        else if(sec=='year-1-b'){
            /*
            document.getElementById("year-1-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-1-b").style="border-bottom:2px solid rgba(141,112,231,1);color:rgba(141,112,231,1);";
            document.getElementById("year-2-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-b").style="border:none;color:rgb(100, 93, 122)";
            */

        }
        else if(sec=='year-2-a'){
            /*
            document.getElementById("year-1-a").style="border:none;color:rgb(100, 93, 122);";
            document.getElementById("year-1-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-a").style="border-bottom:2px solid rgba(141,112,231,1);color:rgba(141,112,231,1)";
            document.getElementById("year-2-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-b").style="border:none;color:rgb(100, 93, 122)";
            */

        } else if(sec=='year-2-b'){
            /*
            document.getElementById("year-1-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-1-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-b").style="border-bottom:2px solid rgba(141,112,231,1);color:rgba(141,112,231,1);";
            document.getElementById("year-3-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-b").style="border:none;color:rgb(100, 93, 122)";
            */

        } else if(sec=='year-3-a'){
            /*
            document.getElementById("year-1-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-1-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-a").style="border-bottom:2px solid rgba(141,112,231,1);color:rgba(141,112,231,1);";
            document.getElementById("year-3-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-b").style="border:none;color:rgb(100, 93, 122)";
            */

        } else if(sec=='year-3-b'){
            /*
            document.getElementById("year-1-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-1-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-b").style="border-bottom:2px solid rgba(141,112,231,1);color:rgba(141,112,231,1);";
            document.getElementById("year-4-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-b").style="border:none;color:rgb(100, 93, 122)";
            */

        } else if(sec=='year-4-a'){
            /*
            document.getElementById("year-1-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-1-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-a").style="border-bottom:2px solid rgba(141,112,231,1);color:rgba(141,112,231,1);";
            document.getElementById("year-4-b").style="border:none;color:rgb(100, 93, 122)";
            */

        } else if(sec=='year-4-b'){
            /*
            document.getElementById("year-1-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-1-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-2-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-3-b").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-a").style="border:none;color:rgb(100, 93, 122)";
            document.getElementById("year-4-b").style="border-bottom:2px solid rgba(141,112,231,1);color:rgba(141,112,231,1);";
            */

        }
    })
    return(<>
        <div id="admin-das">
<div id="admin-das-nav">
        <div id="class-nav">
            <ol>
                <li id="year-1" onClick={()=>{setYear('one')}}>Year 1</li>
                    <ol id="year1">
                        <li id="year-1-a" onClick={(e)=>{setSec("year-1-a")}}>SEC A</li>
                        <li id="year-1-b" onClick={(e)=>{setSec("year-1-b")}}>SEC B</li>
                    </ol>
                <li id="year-2" onClick={()=>{setYear('two')}}>Year 2</li>
                <ol id="year2">
                        <li id="year-2-a" onClick={(e)=>{setSec("year-2-a")}}>SEC A</li>
                        <li id="year-2-b" onClick={(e)=>{setSec("year-2-b")}}>SEC B</li>
                    </ol>
                <li id="year-3" onClick={()=>{setYear('three')}}>Year 3</li>
                <ol id="year3">
                        <li id="year-3-a" onClick={(e)=>{setSec("year-3-a")}}>SEC A</li>
                        <li id="year-3-b" onClick={(e)=>{setSec("year-3-b")}}>SEC B</li>
                    </ol>
                <li id="year-4" onClick={()=>{setYear('four')}}>Year 4</li>
                <ol id="year4">
                        <li id="year-4-a" onClick={(e)=>{setSec("year-4-a")}}>SEC A</li>
                        <li id="year-4-b" onClick={(e)=>{setSec("year-4-b")}}>SEC B</li>
                    </ol>
            </ol>
        </div>
</div>
<div id="admin-das-cont">
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
                        <p>Attended</p>
                    </div>
                    <div id="att-cont">
                        <p>55</p>
                    </div>
                </div>
            </div>
            <div id="dash-natt-count">
                <div id="natt">
                     <div id="natt-top">
                        <p>Not Attended</p>
                    </div>
                    <div id="natt-cont">
                        <p>5</p>
                    </div>
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

    </>)
}
export default Dash;