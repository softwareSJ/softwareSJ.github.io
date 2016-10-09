/**
 * Created by Administrator on 16-8-22.
 */
window.onload = drawClock1;
function drawClock1() {
    var canvas = document.getElementById("can1");
    var context = canvas.getContext("2d");
    context.save();
    context.translate(300, 300);
    var deg = 2 * Math.PI / 12;
    var deg1 = 2 * Math.PI / 60;

    context.save();
    context.beginPath();
    for (var i = 0; i < 13; i++) {
        var x = Math.sin(i * deg);
        var y = -Math.cos(i * deg);
        context.lineTo(x * 200, y * 200);
    }
    var c = context.createRadialGradient(0, 0, 0, 0, 0, 180);
    c.addColorStop(0, "#22f");
    c.addColorStop(1, "#0ef");
    context.fillStyle = c;
    context.fill();
    context.closePath();
    context.restore();


    context.save();
    context.beginPath();
    for (var i = 1; i < 13; i++) {
        var x1 = Math.sin(i * deg);
        var y1 = -Math.cos(i * deg);
        context.fillStyle = "white";
        context.font = "bold 20px Calibri";
        context.textAlign = "center";
        context.textBaseline = "Middle";
        context.fillText(i, x1 * 170, y1 * 170);
    }
    context.closePath();
    context.restore();


    context.save();
    context.beginPath();
    for (var i = 0; i < 12; i++) {
        var x2 = Math.sin(i * deg);
        var y2 = -Math.cos(i * deg);
        context.moveTo(x2 * 199, y2 * 199);
        context.lineTo(x2 * 185, y2 * 185);
    }
    context.strokeStyle = "white";
    context.lineWidth = 4;
    context.stroke();
    context.closePath();
    context.restore();


    context.save();
    context.beginPath();
    for (var i = 0; i < 60; i++) {
        var x2 = Math.sin(i * deg1);
        var y2 = -Math.cos(i * deg1);
        context.moveTo(x2 * 196, y2 * 196);
        context.lineTo(x2 * 190, y2 * 190);
    }
    context.strokeStyle = "white";
    context.lineWidth = "2";
    context.stroke();
    context.closePath();
    context.restore();


    context.save();
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.font = "38px sans-serif";
    context.textAlign = "center";
    //context.textBaseline="middle";
    context.strokeText('(*^__^*) ', 0, -65);
    context.fillText('(*^__^*) ', 0, -65);
    context.restore();


    var time = new Date();
    var h = (time.getHours() % 12) * 2 * Math.PI / 12;
    var m = time.getMinutes() * 2 * Math.PI / 60;
    var s = time.getSeconds() * 2 * Math.PI / 60;
    context.save();
    context.rotate(h + m / 12 + s / 720);
    context.beginPath();
    context.moveTo(0, 6);
    context.lineTo(0, -65);
    context.strokeStyle = "white";
    context.lineCap = "round";
    context.lineWidth = 6;
    context.stroke();
    context.closePath();
    context.restore();


    context.save();
    context.rotate(m + s / 60);
    context.beginPath();
    context.moveTo(0, 6);
    context.lineTo(0, -115);
    context.strokeStyle = "white";
    context.lineCap = "round";
    context.lineWidth = 4;
    context.stroke();
    context.closePath();
    context.restore();


    context.save();
    context.rotate(s);
    context.beginPath();
    context.moveTo(0, 10);
    context.lineTo(0, -125);
    context.strokeStyle = "white";
    context.lineCap = "round";
    context.lineWidth = 2;
    context.stroke();
    context.closePath();
    context.restore();
    context.restore();

    setTimeout(drawClock1, 1000);
}
