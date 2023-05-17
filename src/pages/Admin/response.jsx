import "../../styles/quest.css";
import { useState,useEffect } from "react";
import Loader from "../loader";
const quest=[];
const subject=[];
const mark=[];

const Resp=(props)=>{
    const [status,setStatus]=useState('notLoaded');
    const[year,setYear]=useState('one');
    const[sec,setSec]=useState('year-1-a');
    useEffect(()=>{
       if(status=="notLoaded"){
            document.getElementById("loading-wrapper").style="display:block";
            
            }
            else if(status=="loaded"){
            document.getElementById("loading-wrapper").style="display:none";
            
        }
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
            
    })
    function Fetch(){
        fetch("http://localhost:2000/admin/response")
        .then(res=>res.json())
        .then(res=>{
                    console.log(res);
                    for(var i=0;i<res.question.length;i++){
                        quest[i]=res.question[i];
                    }
                    for(var i=0;i<res.subject.length;i++){
                        subject[i]=res.subject[i];
                    }
                    for(var i=0;i<res.score.length;i++){
                        mark[i]=res.score[i];
                    }
                   
                    console.log(quest);
                    setStatus("loaded");
                
        })
        .catch((err)=>{console.log(err)});
    }
    Fetch();
        let Qs=(props)=>{
            return(
                <>
                <div id="respbox">
                    <div id="questqs">
                        <p>{props.data}</p>
                    </div>
                    <div id="res">
                        <Subj qst={props.no}/>
                    </div>
                </div>
                </>
            )
        }
        function Ques(){
	
            return quest.map((i,j)=><Qs  data={i} subj={subject[j]} no={j} mark={mark[j]}/>)
            
        }
        var Sub=(props)=>{
            return(<>
                <div id="subject">
                    <div id="subj">
                        <div id="subje">
                            {props.subj}
                        </div>
                        <div id="mark">
                            {props.mark}%
                        </div>
                    </div>
                </div>
                </>);
        }
        var Subj=(props)=>{
                console.log(props.qst);
             return subject.map((i,j)=>{return(<><Sub subj={i} mark={mark[props.qst][j]}/></>)})
        }
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
<div id="rquest">
               
                <div id="resp-cont">
                    <Loader/>
                    <Ques/>
                </div>
            </div>
</div>
</div>
                
    </>)
}
export default Resp;