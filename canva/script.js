const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

ctx.fillRect(10, 10, 150, 100);
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.quadraticCurveTo(550, 170, 630, 20);
ctx.stroke();