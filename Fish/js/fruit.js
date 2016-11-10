var fruitObj = function(){
	this.alive=[];
	this.x=[];
	this.y=[];
	this.l=[];
	this.speed=[];
	this.fruitType=[];
	this.orange=new Image();
	this.blue=new Image();
	this.aneno=[];
}
fruitObj.prototype.num=30;
fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.fruitType[i]="";
		this.speed[i]=Math.random()*0.017+0.003;
		this.born(i);
	}
	this.orange.src="./image/fruit.png";
	this.blue.src="./image/blue.png";
	this.aneno[i]=0;

}
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.fruitType[i]=="blue"){
				var pic=this.blue;
			}
			else{
				var pic=this.orange;
			}
			if(this.l[i]<=14){
				var no=this.aneno[i];
				this.x[i]=ane.headx[no];
				this.y[i]=ane.heady[no];
			this.l[i]+=this.speed[i]*deltaTime;
		ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);

			}
		else{
			this.y[i]-=this.speed[i]*2*deltaTime;
		ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);

		}
		if(this.y[i]<10){
			this.alive[i]=false;
		}
	}
		
	}
}
fruitObj.prototype.born=function(i){
	this.aneno[i]=Math.floor(Math.random()*ane.num);
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2){
		this.fruitType[i]="blue";
	}else{
		this.fruitType[i]="orange";
	}
	
}
fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}
function fruitMonitor(){
	var num=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]) num++;
	}
	if(num<15){
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}