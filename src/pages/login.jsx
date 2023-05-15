import '../styles/login.css';
import feed from '../img/feed.png';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
	const navigate=useNavigate();
	function visibile(){
		if(document.getElementById("showp").checked==false){
			document.getElementById("passw").type="password";
		}
		else if(document.getElementById("showp").checked==true){
			document.getElementById("passw").type="text";
		}
	}
	function Submit(e){
		e.preventDefault();
		if(document.getElementById("rollno").value!="" && document.getElementById("passw").value!=""){
			var data={roll:document.getElementById("rollno").value,password:document.getElementById("passw").value};
					var dat={method:'POST',headers:{'Content-Type':'Application/json',},body:JSON.stringify(data),}
					fetch('http://localhost:2000/feedback/login',dat)
					.then(res=>res.json())
					.then((res)=>{
							if(res.message=="admin mode"){
								navigate('/admin',{state:{code:res.code}});
							}
							else if(res.message=="student verified"){
								
								navigate('/feedback',{state:{code:res.code,sem:res.sem,section:res.section,id:document.getElementById("rollno").value}});
							}
							else{
								console.log(res);
							}
					})
					.catch((err)=>{console.log(err);})
		}
		else{
			alert('fill the field');
		}
		
	}

	return(<>
		<div id="login-container" class="box">
			<div id="side1">
				<div id="lform">
				
				<h1>Login</h1>
				<p>login with your unique id</p>
				<form autoComplete="off" onSubmit={Submit}>
				<div id="roll">
				<input type="text" id="rollno" placeholder="Enter Rollno" required/><br/>
				</div>
				<div id="pass">
				<input type="password" id="passw" placeholder="Enter Password" required/><br/>
				</div>
				<div id="show"><input type="checkbox" id="showp" onChange={visibile}/>show password</div>
				
				<div id="sub">
				<input type="submit" value="Login"/>
				</div>
				</form>
				</div>
			</div>
			<div id="side2">
				<div id="side2-top">
				<h1>XYZ College</h1>
				</div>
				<div id="side2-middle">
				
				</div>
				<div id="side2-bottom">
				<h1>Student Feedback System</h1>
				</div>
			</div>
		</div>
		</>);
		
}

export default Login;