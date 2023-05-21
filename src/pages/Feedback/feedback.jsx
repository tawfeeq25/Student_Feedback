import { useState,useEffect } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import '../../styles/feed.css';//importing css for this page
import Loader from '../loader';
//feedback page code
const question=[];//set of question for feedback
const subjects=[];//set of subjects
var code;
const Choice=(props)=>{
    return(<>
		       
		        <div id="sch">
                <div id="ssub">{props.sub}</div>
                <div id="schoi">
                <input type="radio"  id={props.id} name={props.name}  value="1"  required /><span id="num">1</span>
		        <input type="radio"   id={props.id} name={props.name} value="2" /><span id="num">2</span>
		        <input type="radio"   id={props.id} name={props.name} value="3" checked/><span id="num">3</span>
		        <input type="radio"   id={props.id} name={props.name} value="4" /><span id="num">4</span>
		        <input type="radio"   id={props.id} name={props.name} value="5"  /><span id="num">5</span>
                </div>
		        
		            </div>
		       
    </>)
}
//question jsx component
function Choi(props){return (
    subjects.map((i)=><><Choice sub={i} name={i+""+props.id} id={props.id}/></>)
    )}
const Qs=(props)=>
{
   
    return(<>
         <div id="sques">
                <div id="squest">
                <p>{props.name}</p>
                </div>
                <div id="schoice">
                <div id="smark">
               <Choi id={props.name}/>
                </div>
                </div>
            </div>
    </>)
}
function Ques(){return (
    question.map((i)=><><Qs name={i}/></>)
    )}
//feedback jsx component
const Feed=()=>{
    const [status,setStatus]=useState('notLoaded');
    const location=useLocation();
    const navigate=useNavigate();
    console.log(location);
    function Fetch(){
        var dat={method:'POST',headers:{'Content-Type':'Application/json','Accept':'Application/json',},body:JSON.stringify({sem:location.state.sem})};
        fetch("http://localhost:2000/student/"+location.state.code+"/question",dat)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            if(res.message=="done"){
                code=res.Answercode;
               for(var i=0;i<res.question.length;i++){
                question[i]=res.question[i];
               }
               for(var i=0;i<res.subject.length;i++){
                subjects[i]=res.subject[i];
               }
               setStatus("loaded");
            }
        })
        .catch((err)=>{console.log(err)});
    }
   Fetch()
    useEffect(()=>{
        if(status=="loaded"){
            document.getElementById("feed-top").style="display:flex";
            document.getElementById("feed-cont").style="display:flex";
            document.getElementById("loading-wrapper").style="display:none";
        }
        else if(status=="notLoaded"){
            document.getElementById("loading-wrapper").style="display:block";
            document.getElementById("feed-top").style="display:flex";
            document.getElementById("feed-cont").style="display:none";
            
        }
    })
    function submit(event){
        document.getElementById("loading-wrapper").style="display:block";
        document.getElementById("feed-top").style="display:flex";
        document.getElementById("feed-cont").style="display:none";
      event.preventDefault();
      var data={rollno:location.state.id};
      var answer=[];
      var coice=[]
      for(var i=0;i<question.length;i++){/*list he question*/
          for(var j=0;j<subjects.length;j++){
          var choicee=document.getElementsByName(''+subjects[j]+question[i]+'');
          for(var k=0;k<choicee.length;k++){
              if(choicee[k].checked==true){
                  answer.push(choicee[k].value);
              }}}}
      var data={rollno:location.state.id,section:location.state.section,question:question,choice:subjects,result:answer};
      var datt={method:'POST',headers:{'Content-Type':'application/json',},body:JSON.stringify(data),}
      fetch("http://localhost:2000/feedback/"+code+"/answer",datt)
      .then(res=>res.json())
      .then((res)=>{
          console.log(res);
          if(res.message=="updated"){
              alert("feedback recorded");
              navigate('/');	
              }
          })
          .catch((err)=>{console.log(err)});
      
    }
    return(<>
    <div id="feedcont" className="box">
        <Loader/>
        <div id="feed-top">
            <h1>Student Feedback - SEM VI(2022-2023)</h1>
        </div>
        <div id="feed-cont">
        <div id="feedques">
            
            <form onSubmit={submit}>
            <Ques/>
            <div id="submit">
                <input type="submit" value="submit"/>
            </div>
            </form>
            
            </div>
        </div>
       
    </div>
    </>)
}
export default Feed;