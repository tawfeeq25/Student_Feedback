import '../../styles/feed.css';
const Qs=()=>{
    return(<>
         <div id="ques">
                <div id="quest">
                <p>Rate for attendance of staff</p>
                </div>
                <div id="mark">
                <div id="choice">
		        <div id="markk"><span class="one">1</span><span class="two">2</span><span class="three">3</span><span class="four">4</span><span class="five">5</span></div><br/>
		        <div id="ch">
		        <input type="radio"  id="choi" name="val" value="1"  required />
		        <input type="radio"   id="choi" name="val" value="2" />
		        <input type="radio"   id="choi" name="val" value="3" checked/>
		        <input type="radio"   id="choi" name="val" value="4" />
		        <input type="radio"   id="choi" name="val" value="5"  />
		            </div>
		        </div>
                </div>
            </div>
    </>)
}
const Feed=()=>{
    return(<>
    <div id="feedcont" className="box">
        <div id="feedques">
            <Qs/>
            <Qs/>
            <Qs/>
            <Qs/>
            <Qs/>
            <Qs/> <Qs/>
            <Qs/>
            <Qs/>
        </div>
    </div>
    </>)
}
export default Feed;