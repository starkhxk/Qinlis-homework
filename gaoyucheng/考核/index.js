// JavaScript Document
function check_phonenumber(){
	//alert("点击按钮！");
	var phn = document.getElementById("phone_number").value;
	var eula = document.getElementById("eula").checked;
	if(phn==""){
		alert("手机号不能为空！");
		return false;
	}
	if(!isPhoneNumber(phn)){
		alert("手机号不合法!");
		return false;
	}
	if(!eula){
		alert("请阅读并同意服务协议！");
		return false;
	}
	window.location.href="register.html"
}

function isPhoneNumber(tel) {
    var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
    return reg.test(tel);
}