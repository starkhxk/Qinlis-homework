// JavaScript Document
function Isempty(){
	var z = document.getElementById("zhufu").value;
	var x = document.getElementById("xingming").value;
	if(z==""){
		alert("祝福语不能为空！");
		return false;
	}
	if(x==""){
		alert("姓名不能为空！");
		return false;
	}
	alert("ok！");
}