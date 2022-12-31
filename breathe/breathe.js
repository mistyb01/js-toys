const canvas = document.getElementById('breatheCanvas');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;


function drawCircle(radius) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = '#ccffff';
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#33cccc';
    context.stroke();        
}

const playBtn = document.querySelector('#play-btn');
playBtn.addEventListener('click', inhale);

let currRadius = 70;

let circleText = document.getElementById('circle-text');

function inhale() {
    var i = 0;
    circleText.innerText = 'breathe in';
    var timer = setInterval(() => {
        if (i == 4000) {
            clearInterval(timer);
            exhale();
        }
        i += 100;
        currRadius += 1;
        drawCircle(currRadius);
    }, 100);
}

function exhale() {
    var i = 0;
    circleText.innerText = 'breathe out';
    var timer = setInterval(() => {
        if (i == 4000) {
            clearInterval(timer);
            inhale();
        }
        i += 100;
        currRadius -= 1;
        drawCircle(currRadius);
    }, 100);
}


