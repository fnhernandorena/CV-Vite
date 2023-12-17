const canvas = document.getElementById('canvas');
const rect = canvas.getBoundingClientRect();
const ctx = canvas.getContext('2d');

let paint, color, lineWidth, difX, difY;

canvas.addEventListener("mousedown", e => {
    difX = e.clientX - rect.left;
    difY = e.clientY - rect.top;
    paint = true;
    color = document.getElementById('color').value;
    lineWidth = document.getElementById('linewidth').value;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", e => {
    if (paint) {
        draw(difX, difY, e.clientX - rect.left, e.clientY - rect.top);
        difX = e.clientX - rect.left;
        difY = e.clientY - rect.top;
    }
});

canvas.addEventListener("mouseup", () => {
    paint = false;
    ctx.closePath();
});

const draw = (x1, y1, x2, y2) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/jpeg', 1.0);
    const link = document.createElement('a');
    link.download = 'canvas.jpeg';
    link.href = dataURL;
    link.click();
});