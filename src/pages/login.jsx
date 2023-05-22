import '../styles/login.css';
import feed from '../img/feed.png';
import { createRoot } from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Login=()=>{
	const navigate=useNavigate();
	const[status,setStatus]=useState("login");
	var rolll;
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
							else if(res.message="already attended"){
								console.log(res);
								alert("already attended");
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
	function Reset(){
		
		setStatus("reset");
		
	}
	let Log=()=>{
		return(<>
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
				<div id="reset" onClick={Reset}>Reset Password</div>
				<div id="sub">
				<input type="submit" value="Login"/>
				</div>
				</form>
		</>)
	}
	function Rest(e){
		e.preventDefault();
		var cur=document.getElementById("cp").value;
		var np=document.getElementById("np").value;
		var cnp=document.getElementById("cnp").value;
		
		if(cur!="" && np!="" && cnp!=""){
			
				var dat={roll:cur,cp:np,np:cnp};
				var data={method:"post",headers:{'Content-Type':'Application/json','Accept':'Application/json',},body:JSON.stringify(dat)};
				fetch("http://localhost:2000/student/reset/password",data)
				.then(res=>res.json())
				.then(res=>{
					if(res.message=="invalid rollno"){
						alert("invalid rollno")
					}
					else if(res.message=="invalid password"){
						alert("incorrect password");
					}
					else if(res.message=="updated"){
						alert("password updated");
						setStatus("login");
					}
				})
				.catch((err)=>{console.log(err)});
			
			
		}	
		else{
			alert("fill the password box");
		}
	}
	let Rst=()=>{
		return(<>
			<h1>Reset Password</h1>
				<form autoComplete="off" onSubmit={Rest}>
				<div id="roll">
				<input type="text" id="cp" placeholder="Enter Roll number" required/><br/>
				</div>
				<div id="pass">
				<input type="password" id="np" placeholder="Enter old password" required/><br/>
				</div>
				<div id="pass">
				<input type="password" id="cnp" placeholder="Enter new password" required/><br/>
				</div>
			
				<div id="sub">
				<input type="submit" value="Reset Password"/>
				</div>
				</form>
		</>)
	}
	useEffect(()=>{
		if(status=="login"){
			createRoot(document.getElementById("lform")).render(<Log/>);
		}
		else if(status=="reset"){
			createRoot(document.getElementById("lform")).render(<Rst/>)
		}
	})
	return(<>
		<div id="login-container" class="box">
			<div id="side1">
				<div id="lform">
				
				
				</div>
			</div>
			<div id="side2">
				<div id="side2-top">
				<h1>MIET Engineering College</h1>
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