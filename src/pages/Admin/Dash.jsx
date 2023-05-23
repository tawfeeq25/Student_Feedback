import { useState ,useEffect} from "react";
import Loader from '../loader';
import PrintPDF from "./pdf";

var att;
var natt;
var subject=[];
var staff=[];
var points=[];

const Dash=(props)=>{
    const [status,setStatus]=useState('notLoaded');
    const[year,setYear]=useState('1');
    const[sec,setSec]=useState('year-1-a');
   function Api(){
       fetch("http://localhost:2000/admin/"+props.code+"/dashboard")
       .then(res=>res.json())
       .then(res=>{
           if(res.status="done"){
               att=res.attended;
               natt=res.notAttended;
               for(var i=0;i<res.subject.length;i++){
                subject[i]=res.subject[i];
                staff[i]=res.staff[i];
                points[i]=res.percentage[i];
               }
               setStatus('loaded');
               console.log(subject);
               console.log(staff);
               console.log(points);
           }
       })
       .catch((err)=>{console.log(err)});
   }
   Api();
   var Data=(props)=>{
    return(<>
        <tr>
                   
                   <td>{props.subject}</td>
                   <td>{props.staff}</td>
                   <td>{props.point}</td>
                  
         </tr>
    </>)
    }
    var Dat=()=>{
        
        return subject.map((i,j)=>{return(<><Data subject={i} staff={staff[j]} point={points[j]}/></>)})
    }
   
    function Print(){
        PrintPDF(year,subject,points,staff)
        
    }
      
    useEffect(()=>{
        if(status=="loaded"){
            document.getElementById("dash-cont").style="display:grid";
            document.getElementById("loading-wrapper").style="display:none";
        }
        else if(status=="notLoaded"){
            document.getElementById("dash-cont").style="display:none";
            document.getElementById("loading-wrapper").style="display:block";
        }
        if(year=='1'){
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
        else if(year=='2'){
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
        else if(year=='3'){
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
        else if(year=='4'){
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
       
    })
    return(<>
        <div id="admin-das">
<div id="admin-das-nav">
        <div id="class-nav">
            <ol>
                <li id="year-1" onClick={()=>{setYear('1')}}>Year 1</li>
                    <ol id="year1">
                        <li id="year-1-a" onClick={(e)=>{setSec("year-1-a")}}>SEC A</li>
                        <li id="year-1-b" onClick={(e)=>{setSec("year-1-b")}}>SEC B</li>
                    </ol>
                <li id="year-2" onClick={()=>{setYear('2')}}>Year 2</li>
                <ol id="year2">
                        <li id="year-2-a" onClick={(e)=>{setSec("year-2-a")}}>SEC A</li>
                        <li id="year-2-b" onClick={(e)=>{setSec("year-2-b")}}>SEC B</li>
                    </ol>
                <li id="year-3" onClick={()=>{setYear('3')}}>Year 3</li>
                <ol id="year3">
                        <li id="year-3-a" onClick={(e)=>{setSec("year-3-a")}}>SEC A</li>
                        <li id="year-3-b" onClick={(e)=>{setSec("year-3-b")}}>SEC B</li>
                    </ol>
                <li id="year-4" onClick={()=>{setYear('4')}}>Year 4</li>
                <ol id="year4">
                        <li id="year-4-a" onClick={(e)=>{setSec("year-4-a")}}>SEC A</li>
                        <li id="year-4-b" onClick={(e)=>{setSec("year-4-b")}}>SEC B</li>
                    </ol>
            </ol>
        </div>
</div>
<div id="admin-das-cont">
    <Loader/>
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
                   <Dat/>
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
                        <p>{att}</p>
                    </div>
                </div>
            </div>
            <div id="dash-natt-count">
                <div id="natt">
                     <div id="natt-top">
                        <p>Not Attended</p>
                    </div>
                    <div id="natt-cont">
                        <p>{natt}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="dash-print">
        <button id="print" onClick={Print} >Download PDF</button>
    </div>
</div>
</div>
</div>

    </>)
}
export default Dash;