import "../../styles/quest.css";
const quest=["question1","question2","question3","question4","question5","question6","question7"];
const subject=["sub1","sub2","sub3","sub4"];
const mark=[80,40,70,90];
var count=0;
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
var Subj=()=>{
     return subject.map((i,j)=>{return(<><Sub subj={i} mark={mark[j]}/></>)})
}
const Resp=()=>{
        let Qs=(props)=>{
            count=count+1;
            return(
                <>
                <div id="respbox">
                    <div id="questqs">
                        <p>{count}.{props.data}</p>
                    </div>
                    <div id="res">
                        <Subj/>
                    </div>
                </div>
                </>
            )
        }
        function Ques(){
	
            return quest.map((i,j)=><Qs  data={i} subj={subject[j]} mark={mark[j]}/>)
            
        }
        count=0;
    return(<>
            <div id="rquest">
                <div id="resp-top">

                    
                </div>
                <div id="resp-cont">
                    <Ques/>
                </div>
            </div>
                
    </>)
}
export default Resp;