const express=require('express');
const app=express();
const fs=require('fs');
const path=require('path');

const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv').config();
const mysql=require('mysql');
app.use(bodyParser.json());/*parsing json data*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin:'*'}))/* cors for api fetching*/
var sql=mysql.createConnection({host:'localhost',user:'root',password:process.env.password,database:'feedback'});
sql.connect();

app.get('/admin/a7697d58075m58063i3508n48635/dashboard',(req,res)=>{
	var year=3;
	var sem=5;
	var sec='a';var att;var natt;
	var sub=[];
	var sub1=[];
	var staff=[];
	var tota=[];
	

	sql.query("SELECT COUNT(rollno) as attended from student where status='true';",(err11,rrr)=>{
		sql.query("select count(rollno) as natt from student where status='false'",(err12,rrr1)=>{
			natt=rrr1[0].natt;
			att=rrr[0].attended;
		
	sql.query("SELECT sub_name,staff_name from subject where semster=?",[sem],(err,rr)=>{
		console.log(rr);
		for(var i=0;i<rr.length;i++){
			staff[i]=rr[i].staff_name;
			sub[i]='sum('+rr[i].sub_name+")";
			sub1[i]=rr[i].sub_name;

		}
	
		
		sql.query('select '+sub+'  from feedback_'+sec+'',(err22,rrrr)=>{
			var a=Object.values(rrrr[0]);
			for(var k=0;k<a.length;k++){
				var summ=Math.round(a[k]/att);
				tota.push(summ);
			}
				
				res.send({subject:sub1,staff:staff,attended:att,notAttended:natt,percentage:tota});
			
			
		})
	})

	})
	})
	

	
	});


app.get('/admin/response',(req,res)=>{
	var year=3;var sem=5;var sec='a';
	var question=[];var subject=[];var score=[];
	sql.query("SELECT COUNT(rollno) as attended from student where status='true';",(err11,rrr)=>{
	sql.query("select sub_name from subject where semster=?",[sem],(err1,rr1)=>{
	
		for(var i=0;i<rr1.length;i++){
			subject[i]=rr1[i].sub_name;
		}

		sql.query("select question from feedback_a;",(err,rr)=>{
		for(var i=0;i<rr.length;i++){
			question[i]=rr[i].question;

		}
		sql.query('select '+subject+' from feedback_'+sec+';',(err2,rr2)=>{
				for(var i=0;i<rr2.length;i++){
					score[i]=Object.values((rr2[i]));
				}	
				for(var i=0;i<score.length;i++){
					for(var j=0;j<subject.length;j++){
						score[i][j]=Math.round(score[i][j]*20/rrr[0].attended);
					}
				}
				console.log(score);
				res.send({question:question,subject:subject,score:score});
				})
	})
	});})
	
	
})

app.post('/feedback/login',(req,res)=>{
	console.log(req.body);
	if(req.body.roll==process.env.adminUsername){
		
		if(req.body.password==process.env.adminpassword){
			console.log("admin mode");
			res.send({message:"admin mode",code:process.env.admincode})
		}
		else{
			res.send({message:"invalid password"})
			
		}
	} 
	else{
	sql.query('select rollno,year,status,semster,password,section from student where rollno =?',req.body.roll,(err,re,col)=>{
		console.log(err);
		console.log(re);
		if(re==""){
			res.send({message:"invalid roll no"});
		}
		else if(re!=""){
			if(re[0].password==req.body.pass){
				console.log("password verified");
				if(re[0].status=="true"){
					res.send({message:"already attended"});
				}
				else if(re[0].status=="false"){
					
					if(re[0].year==1){
						console.log(re[0].semster)
						var a={message:"student verified",code:process.env.studentFeedbackCode,sem:re[0].semster};
						
						res.send(a);
						
					}
					else if(re[0].year==2){
						res.send({message:"student verified",code:process.env.studentFeedbackCode})
						console.log(re[0].year);

					}
					else if(re[0].year==3){
						res.send({message:"student verified",code:process.env.studentFeedbackCode,sem:re[0].semster,section:re[0].section})
						console.log(re[0].year);
						
					}
					else if(re[0].year==4){
						res.send({message:"student verified",code:process.env.studentFeedbackCode})
						console.log(re[0].year);
						
					}
					else{
						console.log(re);
					}
					

				}
			}
			else{
				res.send({message:"invalid password"});
			}
		}
	});
}
		
	
});
app.post('/feedback/mujhrihnu3748dvbjwuery23rnwudyf824ri2efiuwdhfuefgug8jnjwdfjhjddfjhsd/answer',(req,res)=>{
	console.log(req.body);
	var question=req.body.question;
	
	var sub=req.body.choice;
	var ress=[];
	for(var i=0;i<req.body.result.length;i+=sub.length){
		var inp=req.body.result.slice(i,i+sub.length);
		ress.push(inp);

	}
	
	for(var i=0;i<question.length;i++){
		for(var j=0;j<sub.length;j++){
			
			sql.query('update feedback_'+req.body.section+' set '+sub[j]+'='+sub[j]+'+? where question=?',[ress[i][j],question[i]],(err,resss)=>{
				console.log(resss.message);
			})
		}
		
	}
	sql.query("update student set status='true' where rollno=?",[req.body.rollno],(err,rr)=>{
		console.log(rr);
		res.send({message:"updated"});
	})
	

	
})
app.delete("/admin/question/delete",(req,res)=>{
	console.log("called");
	console.log(req.body)
	
	sql.query("DELETE  FROM feedback_a WHERE question = ?",req.body.data,(er1,t1)=>{
		sql.query("DELETE  FROM feedback_b WHERE question = ?",req.body.data,(er2,t2)=>{
			if(er1==null && er2==null){
				if(t1.affectedRows==1 && t2.affectedRows==1){
					res.send({message:"question deleted"});

				}
			}
			else{
				console.log(er1);
				console.log(er2);

			}
		});
		});
	})
//20.Does your Faculty support you in preparing yourself for Conference/Seminar/Workshop presentations and research ?

app.post("/admin/question/edit",(req,res)=>{
	sql.query("UPDATE feedback_a SET question=? WHERE question=?",[req.body.data,req.body.id],(err,re)=>{
		sql.query("UPDATE feedback_b SET question=? WHERE question=?",[req.body.data,req.body.id],(err1,ret)=>{
			console.log(re);
			if(err==null && err1==null){
				if(re.affectedRows==1 && ret.affectedRows==1){
					console.log("updated");
					res.send({message:"question updated"});
				
				}
			}
			else{
				console.log(err+":"+err1);

			}
		})
	})
	

})
app.get('/admin/a7697d58075m58063i3508n48635/question',(req,res)=>{
	var Question=[];var qno=[];
	sql.query("SELECT question from feedback_a  ORDER BY q_id asc",(err,re,fe)=>{
		console.log(err);
		for(var i=0;i<re.length;i++){
			Question[i]=re[i].question;
			
		}
		
		res.send({question:Question,})
		
	})
});

app.post('/student/st46798757udjfosnfogheorw8795hwefhg38489304ywfgh983465ojwrgi836tne090889668nt46575fir478st/question',(req,res)=>{
		var sem=req.body;
		console.log(sem);
	sql.query("SELECT question from feedback_a",(err,re,fe)=>{
		sql.query("SELECT sub_name from subject where semster =?",[req.body.sem],(er,sem)=>{

			
		var i;var data=[];var id=[];var sems=[];
		if(sem==""){
			console.log(re);
		}
		else if(er!=null){
			console.log(er);
		}
		else{
			for(var i=0;i<sem.length;i++){
				sems[i]=sem[i].sub_name;
			}
			console.log(sems);
		}

		if(re==""){
			res.send({message:"no question"});
		}

		else{
			console.log(err);
		for(i=0;i<re.length;i++){
			
			data[i]=re[i].question;
			id[i]=re[i].ref;
			

		}
		res.send({message:data,Answercode:process.env.studentAnswerCode,subject:sems,id:id});
		}
	});
	})
})
app.listen(2000,()=>{console.log("connected")});