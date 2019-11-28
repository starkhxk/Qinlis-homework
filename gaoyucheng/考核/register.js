// JavaScript Document
var students = [{"studentid":"1903030301","idcard":"210111111111111111","name":"小一"},{"studentid":"1903030302","idcard":"210122222222222222","name":"小二"},{"studentid":"1903030303","idcard":"210133333333333333","name":"小二plus"}];
var error = document.getElementsByClassName("error");
function Confirm_studentid(id){
	for(var i=0;i<students.length;i++){
		if(students[i].studentid==id){
			return true;
		}
	}
	return false;
}
function Confirm_idcard(id){
	for(var i=0;i<students.length;i++){
		if(students[i].idcard==id){
			return true;
		}
	}
	return false;
}
function Confirm_name(id){
	for(var i=0;i<students.length;i++){
		if(students[i].name==id){
			return true;
		}
	}
	return false;
}
function Is_StudentId(){
	var table = document.getElementsByClassName("number");
	if(table[0].value.length>10)
	{
		table[0].value=table[0].value.slice(0,10);
	}
	if((!isRealNum(table[0].value)||(table[0].value.length!=10))){
		error[0].innerHTML="学号不合法";
		return false;
	}else{
		error[0].innerHTML="";
	}
}
function Is_IDnumber(){
	var table = document.getElementsByClassName("number");
	if(table[1].value.length>18)
	{
		table[1].value=table[1].value.slice(0,18);
	}
	if(!(isRealNum(table[1].value.slice(0,17))&&table[1].value.length==18))
	{  
		error[1].innerHTML=("身份证输入不合法");
		return  false;  
	}else{
		error[1].innerHTML=(""); 
		return true;
	}
}

function Is_empty(){
	var table = document.getElementsByClassName("number");
	if(table[2].value==""||table[2].value==null){
		error[2].innerHTML="姓名不能为空";
		return false;
	}else{
		error[2].innerHTML="";
		return true;
	}
}

function Is_legal(){
	if(Is_empty()&&Is_IDnumber()&&Is_StudentId()){
		return true;
	}else{
		return false;
	}
	
	
	
}
function isRealNum(val){
    if(!isNaN(val)){
        return true;
    }else{
        return false;
    }
}   

function Confirm_all(){
	var table = document.getElementsByClassName("number");
	if(Confirm_studentid(table[0].value)&&Confirm_idcard(table[1].value)&&Confirm_name(table[2].value)){
		return true;
	}
	return false;
}

function mysubmit(){
	if(Is_legal){
		if(Confirm_all()){
			document.getElementById("myform").submit();
			alert("ok");
			return true;
		}else{
			alert("学号，身份证，姓名不匹配");
		}
		
	}else{
		alert("bug");
		return false;
	}
}
