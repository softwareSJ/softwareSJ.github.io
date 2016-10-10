$(document).ready(function () {	
	$("#bt1").click(function(){
		$("#bt2,#bt3,#bt4").removeClass();
		$(this).addClass("tuchu-style");
	
		$(".show_1").show(); 
		$(".show_2,.show_3,.show_4").hide();
	});
	$("#bt2").click(function(){
		$("#bt1,#bt3,#bt4").removeClass();
		$(this).addClass("tuchu-style");
	
		$(".show_2").show(); 
		$(".show_1,.show_3,.show_4").hide();
	});
	$("#bt3").click(function(){
		$("#bt1,#bt2,#bt4").removeClass();
		$(this).addClass("tuchu-style");
	
		$(".show_3").show(); 
		$(".show_1,.show_2,.show_4").hide();
	});
	$("#bt4").click(function(){
		$("#bt1,#bt2,#bt3").removeClass();
		$(this).addClass("tuchu-style");
	
		$(".show_4").show(); 
		$(".show_1,.show_2,.show_3").hide();
	});


});




//function $(id){
//	return typeof id==='string'?document.getElementById(id):id;
//}
//
//window.onload=tab;
//var lis=$('ulstyle').getElementsByTagName('li');
//var divs=$('show').getElementsByTagName('div');
//function tab(){
//
////if(lis.length!=divs.length) return;
//for(var i=0;i<lis.length;i++){
//  lis[i].id=i;
//  lis[i].onclick=function(){
//  	for(var j=0;j<lis.length;j++){
//  		lis[j].className='';
//  		divs[j].style.display='none';
//  	}
//  	
//  	this.className='tuchu-style';
//  	divs[this.id].style.display='block';
//
//  }
//  
//}
//}
//function changeOption(curIndex){
//  for(var j=0;j<lis.length;j++){
//     lis[j].className='';
//     divs[j].style.display='none';
//  }
//  lis[curIndex].className='select';
//  divs[curIndex].style.display='block';
//  index=curIndex;
//}
