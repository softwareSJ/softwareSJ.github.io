/**
 * Created by Administrator on 16-8-22.
 */
function drawClock() {
    var canvas = document.getElementById("can");
    var context = canvas.getContext("2d");
    var deg = 2 * Math.PI / 12;
    var deg1 = 2 * Math.PI / 60;
    context.save();
    context.translate(300, 300);


    context.save();
    context.beginPath();
    context.arc(0, 0, 200, 0, Math.PI * 2, true);
    context.strokeStyle = "black";
    context.lineWidth=5;
    context.fillStyle="white";
    context.stroke();
    context.fill();
    context.closePath();
    context.restore();

    context.save();
    context.beginPath();
    for (var i = 1; i < 13; i++) {
        var x = Math.sin(i * deg);
        var y = -Math.cos(i * deg);
        context.font = "bold 20px Calibri";
        context.fillStyle = "black";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(i, x * 230, y * 230);
    }
    context.closePath();
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
    context.strokeStyle = "black";
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
    context.strokeStyle = "black";
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
    context.strokeStyle = "red";
    context.lineCap = "round";
    context.lineWidth = 2;
    context.stroke();
    context.closePath();
    context.restore();


    context.save();
    context.beginPath();
    context.arc(0, 0, 10, 0, Math.PI * 2, true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
    context.restore();
    context.restore();

    setTimeout(drawClock, 1000);


}

window.addEventListener("load", drawClock, true);
