var bfishObj=function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye=new Image();
	this.bigBody=new Image();
	this.bigTail=new Image();
	this.bfishTailTimer=0;
	this.bfishTailCount=0;
	this.bfishEyeTimer=0;
	this.bfishEyeCount=0;
	this.bfishEyeInterval=1000;
	this.bfishBodyTimer=0;
	this.bfishBodyCount=0;
}
bfishObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight*0.5;
	this.angle=0;

	this.bigEye.src="./image/bigEye0.png";
	this.bigBody.src="./image/bigSwim0.png";

}
bfishObj.prototype.draw=function(){
	this.x=lerpDistance(mx, this.x, 0.98);
	this.y=lerpDistance(my, this.y, 0.98);
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY,deltaX)+Math.PI;
	this.angle=lerpAngle(beta,this.angle,0.6);
	// tail
	this.bfishTailTimer+=deltaTime;
	if(this.bfishTailTimer>50){
		this.bfishTailCount=(this.bfishTailCount+1)%8;
		this.bfishTailTimer%=50;
	}
	// eye
	this.bfishEyeTimer+=deltaTime;
	if(this.bfishEyeTimer>this.bfishEyeInterval){
		this.bfishEyeCount=(this.bfishEyeCount+1)%2;
		this.bfishEyeTimer%=this.bfishEyeInterval;
		if(this.bfishEyeCount==0){
			this.bfishEyeInterval=Math.random()*1500+2000;
		}else{
			this.bfishEyeInterval=200;
		}
	}
	// body
	this.bfishBodyTimer+=deltaTime;
	if(this.bfishBodyTimer>300){
		this.bfishBodyCount=this.bfishBodyCount+1;
		this.bfishBodyTimer%=300;
		if(this.bfishBodyCount>7){
			this.bfishBodyCount=7;
		}
	}
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	// tail
	var bfishTailCount=this.bfishTailCount;
	ctx1.drawImage(bfishTail[bfishTailCount],-bfishTail[bfishTailCount].width*0.5+30,-bfishTail[bfishTailCount].height*0.5);
	var bfishBodyCount=this.bfishBodyCount;
	if(data.double==1){
	ctx1.drawImage(bfishBodyOrange[bfishBodyCount],-bfishBodyOrange[bfishBodyCount].width*0.5,-bfishBodyOrange[bfishBodyCount].height*0.5);

	}
	else{
	ctx1.drawImage(bfishBodyBlue[bfishBodyCount],-bfishBodyBlue[bfishBodyCount].width*0.5,-bfishBodyBlue[bfishBodyCount].height*0.5);

	}
	var bfishEyeCount=this.bfishEyeCount;
	ctx1.drawImage(bfishEye[bfishEyeCount],-bfishEye[bfishEyeCount].width*0.5,-bfishEye[bfishEyeCount].height*0.5);
	// bigEye

	ctx1.restore();
}