// 判断鱼和果实的距离
function bfishandfruit(){
	if(!data.gameOver){
			for(var i=0;i<fruit.num;i++){
			if(fruit.alive[i]){
				var l=calLength2(fruit.x[i],fruit.y[i],bfish.x,bfish.y);
				if(l<500){
					fruit.dead(i);
					data.fruitNum++;
					bfish.bfishBodyCount++;
					if(bfish.bfishBodyCount>7)
						bfish.bfishBodyCount=7;
					if(fruit.fruitType[i]=="blue"){
						data.double=2;
					}
					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
	
}
// 大鱼和小鱼的距离
function bfishandsfish(){
	if(data.fruitNum>0 && !data.gameOver){
		var l=calLength2(bfish.x,bfish.y,sfish.x,sfish.y);
		if(l<900){
			sfish.sfishBodyCount=0;

			bfish.bfishBodyCount=0;
			// score
			data.addScore();
			wavefish.born(sfish.x,sfish.y);
		}
	}
	
}