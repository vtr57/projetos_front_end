var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Função para desenhar o círculo
function drawCircle(ctx, x, y, radius, fillColor, strokeColor, lineWidth) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

// Função para desenhar a linha da seta
function drawLine(ctx, startX, startY, endX, endY, color, lineWidth) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

// Função para desenhar a ponta da seta
function drawArrowHead(ctx, x, y, angle, length, color, lineWidth) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - length * Math.cos(angle - Math.PI / 6), y - length * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(x, y);
    ctx.lineTo(x - length * Math.cos(angle + Math.PI / 6), y - length * Math.sin(angle + Math.PI / 6));
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
}

// Função para desenhar um vetor (linha + ponta da seta)
function drawVector(ctx, startX, startY, endX, endY, color, lineWidth) {
    // Desenha a linha do vetor
    drawLine(ctx, startX, startY, endX, endY, color, lineWidth);

    // Calcula o ângulo da linha para desenhar a ponta da seta
    var angle = Math.atan2(endY - startY, endX - startX);

    // Desenha a ponta da seta
    drawArrowHead(ctx, endX, endY, angle, 10, color, lineWidth);
}

// Desenhar o círculo
drawCircle(ctx, 100, 100, 50, '#D2B174', '#005c70', 2);

// Desenhar o vetor
drawVector(ctx, 150, 100, 300, 100, '#D2B174', 2);

drawVector(ctx, 300, 400, 350, 420, '#000', 2);