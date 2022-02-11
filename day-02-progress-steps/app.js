const steps = document.querySelectorAll('.step')
const barProgress = document.querySelector('.bar-progress');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
let currentPosition = 1;
let barCurrentPosition = 0;

btnPrev.addEventListener('click', () => {
    decreaseBar();
    
    if(currentPosition <= 1) {
        btnPrev.setAttribute('disabled', true);
        return;
    }

    if(btnNext.hasAttribute('disabled')) {
        btnNext.removeAttribute('disabled');
    }
})

btnNext.addEventListener('click', () => {
    inscreaseBar();
    
    if(currentPosition >= 5) {
        btnNext.setAttribute('disabled', true);
    }
    
    if(btnPrev.hasAttribute('disabled')) {
        btnPrev.removeAttribute('disabled');
    }
})

function inscreaseBar() {
    currentPosition++;
    steps[currentPosition - 1].classList.add('active');
    barCurrentPosition += 25;
    barProgress.style.width = `${barCurrentPosition}%`;
    
}

function decreaseBar() {
    currentPosition--;
    steps[currentPosition].classList.remove('active');
    barCurrentPosition -= 25;
    barProgress.style.width = `${barCurrentPosition}%`;
}
