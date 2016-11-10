var can1;
var can2;
var ctx1,ctx2;
var canWidth,canHeight;
var lastTime,deltaTime;
var bgPic=new Image();
var ane;
var fruit;
var bfish,sfish;

var mx,my;
var sfishTail=[];
var sfishEye=[];
var sfishBody=[];
var bfishTail=[];
var bfishEye=[];
var bfishBodyOrange=[];
var bfishBodyBlue=[];
var data;
var wave;
var wavefish;
var dust;
var dustPic=[];
document.body.onload=game;
function game(){
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init(){
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext('2d');
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext('2d');

	can1.addEventListener('mousemove',onMouseMove,false);
	bgPic.src="./image/background.jpg";
	canWidth=can1.width;
	canHeight=can1.height;
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	bfish=new bfishObj();
	bfish.init();
	sfish=new sfishObj();
	sfish.init();
	mx=canWidth*0.5;
	my=canHeight*0.5;
	for(var i=0;i<8;i++){
		sfishTail[i]=new Image();
		sfishTail[i].src="./image/babyTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		sfishEye[i]=new Image();
		sfishEye[i].src="./image/babyEye"+i+".png";
	}
	for(var i=0;i<20;i++){
		sfishBody[i]=new Image();
		sfishBody[i].src="./image/babyFade"+i+".png";
	}
	for(var i=0;i<8;i++){
		bfishTail[i]=new Image();
		bfishTail[i].src="./image/bigTail"+i+".png";
	}
	for(var i=0;i<2;i++){
		bfishEye[i]=new Image();
		bfishEye[i].src="./image/bigEye"+i+".png";
	}
	for(var i=0;i<8;i++){
		bfishBodyOrange[i]=new Image();
		bfishBodyBlue[i]=new Image();
		bfishBodyOrange[i].src="./image/bigSwim"+i+".png";
		bfishBodyBlue[i].src="./image/bigSwimBlue"+i+".png";
	}
	data=new dataObj();
	ctx1.font="30px Verdana";
	ctx1.textAlign="center";
	wave=new waveObj();
	wave.init();
	wavefish=new wavefishObj();
	wavefish.init();
	for(var i=0;i<7;i++){
		dustPic[i]=new Image();
		dustPic[i].src="./image/dust"+i+".png";
	}
	dust=new dustObj();
	dust.init();

}
function gameloop(){
	requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	if(deltaTime>40) deltaTime=40;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth,canHeight);
	bfish.draw();
	sfish.draw();
	bfishandfruit();
	bfishandsfish();
	data.draw();
	wave.draw();
	wavefish.draw();
	dust.draw();
}
function onMouseMove(e){
	if(!data.gameOver){
			if(e.offSetX || e.layerX){
			mx=e.offSetX==undefined ? e.layerX : e.offSetX;
			my=e.offSetY==undefined ? e.layerY : e.offSetY;

		}
	}
	
}