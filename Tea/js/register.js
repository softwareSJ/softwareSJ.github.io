function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}
function getLength(str){
		return str.replace(/[^\x00-xff]/g,"xx").length;
	}
window.onload=function(){
	var count=document.getElementById("count");
	
	document.getElementById("input1").onfocus=function(){
		document.getElementById("span1").style.display="block";
	}
	var name_length=0;
	document.getElementById("input1").onkeyup=function(){
		name_length=name_length+1;
		document.getElementById("count").innerHTML=name_length+"个字符";
		document.getElementById("count").style.display="block";
		name_length=getLength(this.value);
//		document.getElementById("count").innerHTML=name_lenght;
		if(name_length==0){
			count.style.display="none";
		}
	}
	document.getElementById("input1").onblur=function(){
		var re=/[^\w\u4e00-\u9fa5]/g;
		if(re.test(this.value)){
			document.getElementById("span1").innerText="含有非法字符！"
		}
		else if(this.value==""){
						document.getElementById("span1").innerText="不能为空！"
		}
		else if(name_length>25){
						document.getElementById("span1").innerText="长度超过25个字符！请重新输入！"
		}
		else if(name_length<6){
						document.getElementById("span1").innerText="长度少于6个字符！请重新输入！"
		}
		else{
		document.getElementById("span1").style.color="green"
		document.getElementById("span1").innerText="OK"
		}
	}
	var em=document.getElementsByTagName("em");
	var pwd=document.getElementById("input2");
	pwd.onkeyup=function(){
		if(this.value.length>5){
			em[1].className="active";
			document.getElementById("span2").innerText="中"
			document.getElementById("span2").style.display="block";
					
		
		if(this.value.length>12){
			em[2].className="active";
			document.getElementById("span2").innerText="强"
			document.getElementById("span2").style.display="block";
					
		}
		else if(this.value.length<12){
			em[2].className="";
		}
		else if(this.value.length==0){
			em[2].className="";
		}
		}
		else{
			em[1].className="";
			document.getElementById("span2").innerText="弱"
			document.getElementById("span2").style.display="block";
		}
	}
	function findStr(str,n){
		var tmp=0;
		for(var i=0;i<str.length;i++){
			if(str.charAt(i)==n){
				tmp++;
			}
		}
		return tmp;
	}
	pwd.onblur=function(){
		//var m=findStr(pwd.value,pwd.value[0]);
		var re_n=/[^\d]/g;
		var re_t=/[^a-zA-Z]/g;
		if(this.value==""){
			document.getElementById("span2").innerText="密码不能为空！"
			//document.getElementById("span2").style.display="block";
		}
		else if(findStr(pwd.value,pwd.value[0])==this.value.length){
			document.getElementById("span2").innerText="不能使用相同字符！"
		}
		else if(this.value.length<6||this.value.length>16){
			document.getElementById("span2").innerText="长度应为6-16个字符！"
		}
		else if(!re_n.test(this.value)){
			document.getElementById("span2").innerText="不能全为数字！"
		}
		else if(!re_t.test(this.value)){
			document.getElementById("span2").innerText="不能全为字母！"
		}
		else{
			document.getElementById("span2").style.color="green"
			document.getElementById("span2").innerText="OK"

		}
	}
	var rpwd=document.getElementById("input3");
	document.getElementById("input3").onblur=function(){
		if(this.value!=document.getElementById("input2").value){
			document.getElementById("span3").innerText="两次输入不一致，请再次确认！"
			document.getElementById("span3").style.display="block";
		}
		else if(this.value==""){
			document.getElementById("span3").style.display="none";
		}
		else{
			document.getElementById("span3").style.color="green"
			document.getElementById("span3").innerText="OK"
		}
	}
//	document.getElementById('input4').onblur=function (obj,str,allowNull){  
//  var pattern = /^((\(\d{3}\))|(\d{3}\-))?13\d{9}$/;  
//  //if(!isNotNull(obj,str,allowNull)) return false;  
//  if(!(pattern.test(document.getElementById('input4').value))){  
//   //  document.getElementById('doing').style.visibility='hidden';  
//   	document.getElementById("span4").innerText="不是正确的手机号！"
//      //alert(str+" 不是正确的手机号码！");  
//      document.getElementById('input4').focus();  
//      return false;  
//  }  
////  else if(pattern.test(document.getElementById('input4').value)){
////  	document.getElementById("span4").innerText="OK！"
////  }
//	else return true;  
//	}  
	var inp = document.getElementById("input6");
    var code = document.getElementById("span6");
    var c = new KinerCode({
        len: 4,
        chars: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        question:false,
        copy: false,
        bgColor:"",
        bgImg:"bg.jpg",
        randomBg : false,
        inputArea: inp,
        codeArea: code,
        click2refresh:true,
        false2refresh:true,
        validateEven : "blur",
        validateFn : function(result,code){
            if(result){
            	document.getElementById("codemsg").style.color="green"
                document.getElementById("codemsg").innerHTML="验证成功！"
            }else{
                if(this.opt.question){
                	
                }else{
                	document.getElementById("codemsg").style.color="red"
                    document.getElementById("codemsg").innerHTML="验证失败！"
//                  alert('验证失败:'+code.strCode);
//                  alert('验证失败:' + code.arrCode);
                }
            }
        }
    });  
//	var input=$('table').getElementsByTagName('input');
//var spanmsg=$('table').getElementsByTagName('span');
//for(var i=0;i<input.length;i++){
//  input[i].id=i;
//}
//	var test_input=document.getElementsByTagName("input");
//	var uesername=test_input[0];
//	var psd=test_input[1];
//	var rpsd=test_input[2];
//	var phone=test_input[3];
//	var email=test_input[4];
//	var code=test_input[5];
//	var b_span=document.getElementsByTagName("span");
//	var uesername-t=b_span[0];
//	var psd-t=b_span[1];
//	var rpsd-t=b_span[2];
//	var phone-t=b_span[3];
//	var email-t=b_span[4];
//	var code-t=b_span[5];
//	var re=/[^\w\u4e00-\u9fa5]/g;
//	uesername.onfocus=function(){
//		uesername-t.style.display="block";
//	}
}
