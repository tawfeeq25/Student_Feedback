import '../styles/login.css';
import feed from '../img/feed.png';

const Login=()=>{
	function visibile(){
		if(document.getElementById("showp").checked==false){
			document.getElementById("passw").type="password";
		}
		else if(document.getElementById("showp").checked==true){
			document.getElementById("passw").type="text";
		}
	}
		

	return(<>
		<div id="login-container" class="box">
			<div id="side1">
				<div id="lform">
				<h1>Login</h1>
				<p>login with your unique id</p>
				<form autoComplete="off">
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
				<h1>M.I.E.T Engineering College</h1>
				</div>
				<div id="side2-middle">
				<img src={feed}/>
				</div>
				<div id="side2-bottom">
				<h1>Student Feedback System</h1>
				</div>
			</div>
		</div>
		</>);
		
}

export default Login;