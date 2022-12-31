const canvas = document.getElementById('breatheCanvas');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;


function drawCircle(radius, fill, strokeColor) {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = fill;
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = strokeColor;
    context.stroke();        
}

let isBreathing = false;
const playBtn = document.querySelector('#play-btn');
playBtn.addEventListener('click', () => {
    isBreathing = !isBreathing;
    if (isBreathing) { inhale() }
});

let currRadius = 70;

let circleText = document.getElementById('circle-text');

function inhale() {
    currRadius = 70;
    var i = 0;
    circleText.innerText = 'breathe in';
    var timer = setInterval(() => {
        if (!isBreathing) {
            clearInterval(timer);
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        else if (i == 4000) {
            clearInterval(timer);
            exhale();
        } else {
            i += 50;                                
            currRadius += 1;
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawCircle(150, 'transparent', '#ccffff');
            drawCircle(currRadius, '#33cccc', 'transparent');                                                                                                                                                          
        }
    }, 50);
}

function exhale() {
    currRadius = 150;
    var i = 0;
    circleText.innerText = 'breathe out';
    var timer = setInterval(() => {
        if (!isBreathing) {
            clearInterval(timer);
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        else if (i == 4000) {
            clearInterval(timer);
            inhale();
        } else {
            i += 50;
            currRadius -= 1;
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawCircle(150, 'transparent', '#ccffff');
            drawCircle(currRadius, '#33cccc', 'transparent');
        }
    }, 50);
}


