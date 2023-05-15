import "../../styles/quest.css";
import { FiTrash2 } from "react-icons/fi";
import { FaPen } from "react-icons/fa";
import { useState ,useEffect} from "react";
import Loader from '../loader';
import { json } from "react-router-dom";
const quest=[];

const Quest=(props)=>{
        const[status,setStatus]=useState('notLoaded');
        function Edit(event){
            var id=event.currentTarget.id;
            document.getElementById(id+"edit").contentEditable="true";
            
        
        }
        function Fetch(){
            fetch("http://localhost:2000/admin/"+props.code+"/question")
            .then(res=>res.json())
            .then(res=>{
                for(var i=0;i<res.question.length;i++){
                    quest[i]=res.question[i];
                }
                setStatus("loaded");
            })
            .catch((err)=>{console.log(err)});
        }
        Fetch();
        useEffect(()=>{
            if(status=="notLoaded"){
            document.getElementById("loading-wrapper").style="display:block";
                
            }
            else if(status=="loaded"){
            document.getElementById("loading-wrapper").style="display:none";
            }
            
        })
        let Qs=(props)=>{
            function Edit(e){
                document.getElementById(e.currentTarget.id+"bot").style="display:flex";
                document.getElementById(e.currentTarget.id+"edit").contentEditable="true";
            }
            function Cancel(e){
                document.getElementById(e.currentTarget.id+"bot").style="display:none";
                document.getElementById(e.currentTarget.id+"edit").contentEditable="false";

            }
            function Save(e){
               var a= document.getElementById(e.currentTarget.id+"edit").textContent;
               var data={id:e.currentTarget.id,data:a}
               console.log(data);
               var dat={method:"POST",headers:{'Content-Type':'Application/json','Accept':'Application/json',},body:JSON.stringify(data)}
                fetch("http://localhost:2000/admin/question/edit",dat)
                .then(res=>res.json())
                .then(res=>{
                    if(res.message=="question updated"){
                         setStatus("loaded");

                    }
                })
                .catch((err)=>{console.log(err)});
            }
            return(
                <>
                <div id="questbox">
                    <div id="quest-top">
                    <div id="questqs">
                        <p id={props.data+"edit"}>{props.data}</p>
                    </div>
                    <div id="questedit">
                        <button id={props.data} onClick={Edit}><FaPen style={{color: '#555555', fontSize: '28px'}}/></button>
                    </div>
                    <div id="questdelete">
                    <button id={props.data}><FiTrash2 style={{color: '#555555', fontSize: '28px'}}/></button>
                    </div>
                    </div>
                    <div id={props.data+"bot"} className="quest-bot">
                        <button className="qst-cans" id={props.data} onClick={Cancel}>Cancel</button><button className="qst-save"  id={props.data} onClick={Save}>Save</button>
                    </div>
                </div>
                </>
            )
        }
        function Ques(){
	
            return quest.map((i)=><Qs  data={i}/>)
            
        }
       
    return(<>
            <div id="question">
                <Loader />
                <div id="eport">

                </div>
                <Ques/>

            </div>
    </>)
}
export default Quest;