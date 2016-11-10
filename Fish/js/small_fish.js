var sfishObj=function(){
	this.x;
	this.y;
	this.angle;
	this.smallEye=new Image();
	this.smallBody=new Image();
	this.smallTail=new Image();
	this.sfishTailTimer=0;
	this.sfishTailCount=0;
	this.sfishEyeTimer=0;
	this.sfishEyeCount=0;
	this.sfishEyeInterval=1000;
	this.sfishBodyTimer=0;
	this.sfishBodyCount=0;
}	
sfishObj.prototype.init=function(){
	this.x=canWidth*0.5-50;
	this.y=canHeight*0.5+50;
	this.angle=0;
	
	this.smallBody.src="./image/babyFade0.png";

}
sfishObj.prototype.draw=function(){
	this.x=lerpDistance(bfish.x, this.x, 0.98);
	this.y=lerpDistance(bfish.y, this.y, 0.98);

	var deltaY=bfish.y-this.y;
	var deltaX=bfish.x-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);
	// tail
	this.sfishTailTimer+=deltaTime;
	if(this.sfishTailTimer>50){
		this.sfishTailCount=(this.sfishTailCount+1)%8;
		this.sfishTailTimer%=50;
	}
	// babyEye
	this.sfishEyeTimer+=deltaTime;
	if(this.sfishEyeTimer>this.sfishEyeInterval){
		this.sfishEyeCount=(this.sfishEyeCount+1)%2;
		this.sfishEyeTimer%=this.sfishEyeInterval;
		if(this.sfishEyeCount==0){
			this.sfishEyeInterval=Math.random()*1500+2000;
		}else{
			this.sfishEyeInterval=200;
		}
	}
	// babyBody
	this.sfishBodyTimer+=deltaTime;
	if(this.sfishBodyTimer>300){
		this.sfishBodyCount=this.sfishBodyCount+1;
		this.sfishBodyTimer%=300;
		if(this.sfishBodyCount>19){
			this.sfishBodyCount=19;
			data.gameOver=true;
		}
	}
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	var sfishTailCount=this.sfishTailCount;
	ctx1.drawImage(sfishTail[sfishTailCount],-sfishTail[sfishTailCount].width*0.5+25,-sfishTail[sfishTailCount].height*0.5);
	var sfishBodyCount=this.sfishBodyCount;
	ctx1.drawImage(sfishBody[sfishBodyCount],-sfishBody[sfishBodyCount].width*0.5,-sfishBody[sfishBodyCount].height*0.5);
	var sfishEyeCount=this.sfishEyeCount;
	ctx1.drawImage(sfishEye[sfishEyeCount],-sfishEye[sfishEyeCount].width*0.5,-sfishEye[sfishEyeCount].height*0.5);
	
	ctx1.restore();
}