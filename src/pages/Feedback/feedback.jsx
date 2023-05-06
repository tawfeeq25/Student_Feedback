import '../../styles/feed.css';//importing css for this page
//feedback page code
const question=['Question 1','Question 2','Question 3','Question 4','Question 5'];//set of question for feedback
const subjects=['Sub1','Sub2','Sub3','Sub4','Sub5','Sub3','Sub4','Sub5'];//set of subjects
var count=0;
const Choice=(props)=>{
    return(<>
		       
		        <div id="sch">
                <div id="ssub">{props.name}</div>
                <div id="schoi">
                <input type="radio"  id="choi" name="val"  value="1"  required /><span id="num">1</span>
		        <input type="radio"   id="choi" name="val" value="2" /><span id="num">2</span>
		        <input type="radio"   id="choi" name="val" value="3" checked/><span id="num">3</span>
		        <input type="radio"   id="choi" name="val" value="4" /><span id="num">4</span>
		        <input type="radio"   id="choi" name="val" value="5"  /><span id="num">5</span>
                </div>
		        
		            </div>
		       
    </>)
}
//question jsx component
function Choi(){return (
    subjects.map((i)=><><Choice name={i}/></>)
    )}
const Qs=(props)=>
{
    count=count+1;
    return(<>
         <div id="sques">
                <div id="squest">
                <p>{count}.{props.name}</p>
                </div>
                <div id="schoice">
                <div id="smark">
               <Choi/>
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
    return(<>
    <div id="feedcont" className="box">
        <div id="feed-top">
            <h1>Student Feedback - SEM VI(2022-2023)</h1>
        </div>
        <div id="feed-cont">
        <div id="feedques">
            
            <form>
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