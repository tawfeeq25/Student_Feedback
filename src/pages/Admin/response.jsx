import "../../styles/quest.css";
const quest=["question1","question2","question3","question4","question5","question6","question7"];
var count=0;
const Resp=()=>{
        let Qs=(props)=>{
            count=count+1;
            return(
                <>
                <div id="respbox">
                    <div id="questqs">
                        <p>{count}.{props.data}</p>
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
export default Resp;