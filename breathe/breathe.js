const canvas = document.getElementById('breatheCanvas');
const context = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

let circleText = document.getElementById('circle-text');

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
    if (isBreathing) { 
        animateBubble(70, true) 
        playBtn.innerText = 'end'
    } else {
        playBtn.innerText = 'play'
    }
});

function animateBubble(startRadius, breathingIn) {
    let currRadius = startRadius;
    let i = 0;
    let timer = setInterval(() => {
        if (!isBreathing) {
            clearInterval(timer);
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        else if (i == 4000) {
            clearInterval(timer);
            console.log(breathingIn);
            breathingIn ? animateBubble(150, false) : animateBubble(70, true);
        } else {
            i += 50;                                
            breathingIn ? currRadius += 1 : currRadius -= 1;
            context.clearRect(0, 0, canvas.width, canvas.height);

            drawCircle(150, 'transparent', '#ccffff');
            drawCircle(currRadius, '#33cccc', 'transparent');                                                                                                                                                          
        }
    }, 50);
}
