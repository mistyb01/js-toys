const canvas = document.getElementById('breatheCanvas');
const context = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
let circleText = document.getElementById('circle-text');
context.font = "32px Arial";

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
    let blue;
    breathingIn ? blue = 240 : blue = 0;
    let text;
    breathingIn ? text = "inhale" : text = "exhale";
    let timer = setInterval(() => {
        if (!isBreathing) {
            clearInterval(timer);
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
        else if (i == 4000) {
            clearInterval(timer);
            breathingIn ? animateBubble(150, false) : animateBubble(70, true);
        } else {
            i += 50;       
            breathingIn ? blue -= 3 : blue += 3;                         
            breathingIn ? currRadius += 1 : currRadius -= 1;
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawCircle(150, 'transparent', `rgba(51, 204, ${blue}, 0.5)`);
            drawCircle(currRadius, `rgba(51, 204, ${blue}, 0.3)`, 'transparent');  
            context.fillText(text, centerX - 50, centerY);
            // circleText.innerText = Math.floor((i / 1000) % 10) + 1;                                                                                                                                                      
        }
    }, 50);
}

/*
list of improvements

- a start countdown at the beginning
- counts the seconds each time
- more visual flair with bubble (changes colors between inhale and exhale)
- ability to adjust the timing 
- other breathing exercise options (like box breathing)
- set the mood with ambient sound, particles, etc.
- overall css styling

*/



