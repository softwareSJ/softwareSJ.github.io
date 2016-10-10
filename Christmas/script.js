/**
 * Created by Administrator on 16-8-29.
 */
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    animateButton = document.getElementById("animateButton"),

    snow = new Image(),
    sled =  new Image(),
    snow1=new Image(),
    snow2=new Image(),
    background = new Image(),

    paused = true,
    lastTime = 0,
    fps = 60,

    backgroundOffset = 0,
    snowOffset = 0,
    sledOffset = 0,

    SNOW_VELOCITY = 35,
    SLED_VELOCITY = 40,
    BCK_VELOCITY=25;
function erase(){
    context.clearRect(0,0,canvas.width,canvas.height);
}

function draw(){
    context.save();
    //计算出绘制四个图层时需要对坐标系进行平移的距离
    backgroundOffset = backgroundOffset<canvas.width?backgroundOffset+BCK_VELOCITY/fps:0;
    snowOffset = snowOffset<canvas.width?snowOffset+SNOW_VELOCITY/fps:0;
    sledOffset = sledOffset<canvas.width?sledOffset+SLED_VELOCITY/fps:0;

    context.save();
    context.translate(backgroundOffset,0);
    context.drawImage(background,0,0);
    context.drawImage(background,-(background.width-2),0);
    context.restore();

    context.save();
    context.translate(0,snowOffset);
    context.drawImage(snow,500,0);
    context.drawImage(snow,100,100);
    context.drawImage(snow,200,50);
    context.drawImage(snow1,450,20);
    context.drawImage(snow1,350,70);
    context.drawImage(snow2,300,50);
    context.drawImage(snow1,500,-100);
    context.drawImage(snow2,100,-150);
    context.drawImage(snow,200,-250);
    context.drawImage(snow1,450,-220);
    context.drawImage(snow1,350,-370);
    context.drawImage(snow2,300,-150);
    context.drawImage(snow,100,-120);
    context.drawImage(snow,200,-50);
    context.restore();

    context.save();
    context.translate(-sledOffset,0);
    context.drawImage(sled,canvas.width,230);
    context.restore();
}

function calculateFps(now){
    var fps = 1000/(now-lastTime);
    lastTime = now;
    return fps;
}
function animate(now){
    if(now===undefined){
        now=+new Date;
    }
    fps = calculateFps(now);
    if(!paused){
        erase();
        draw();
    }
    requestNextAnimationFrame(animate);
}
animateButton.onclick = function(e){
    paused = paused ? false:true;
    if(paused){
        animateButton.value = "Animate";
    }
    else {
        animateButton.value = "Pause";
    }
}

context.font="48px Helvetia";
snow.src = "image/雪花.png";
sled.src = "image/雪橇.png";
snow1.src = "image/雪花1.png";
snow2.src = "image/雪花2.png";
background.src = "image/背景.png";
background.onload = function(e){
    draw();
};

requestNextAnimationFrame(animate);
