const counter = document.querySelector('.counter');
const background = document.querySelector('.background');

let index = 0;
let opacityCounter = 1;
let blurCounter = 30;

const interval = setInterval(() => {
    index++;
    opacityCounter -= 0.01
    blurCounter -= 0.3;

    counter.innerText = `${index}%`
    counter.style.opacity = opacityCounter.toFixed(2);
    background.style.filter = `blur(${blurCounter.toFixed(2)}px)`;
    
    if(index >= 100) {
        clearInterval(interval);
        counter.innerText = 'Welcome'
        counter.style.opacity = 1;
    }


}, 30);