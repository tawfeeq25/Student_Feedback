import "../../styles/quest.css";
import { FiTrash2 } from "react-icons/fi";
import { FaPen } from "react-icons/fa";
const quest=["question1","question2","question3","question4","question5","question6","question7"];
var count=0;
const Quest=()=>{
        let Qs=(props)=>{
            count=count+1;
            return(
                <>
                <div id="questbox">
                    <div id="questqs">
                        <p>{count}.{props.data}</p>
                    </div>
                    <div id="questedit">
                        <button id={props.data}><FaPen style={{color: 'black', fontSize: '28px'}}/></button>
                    </div>
                    <div id="questdelete">
                    <button id={props.data}><FiTrash2 style={{color: 'black', fontSize: '28px'}}/></button>
                    </div>
                </div>
                </>
            )
        }
        function Ques(){
	
            return quest.map((i)=><Qs  data={i}/>)
            
        }
        count=0;
    return(<>
            <div id="question">
                <Ques/>

            </div>
    </>)
}
export default Quest;