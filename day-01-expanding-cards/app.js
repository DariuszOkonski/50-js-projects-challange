const containerBlocks = document.querySelectorAll('.container__block');
let cleanActiveWhenSmall = false;

containerBlocks.forEach(element => {
    element.addEventListener('click', () => {
        removeClassAcitve();

        element.classList.add('container__block--active');
    })
})

function removeClassAcitve() {
    containerBlocks.forEach(element => {
        if(element.classList.contains('container__block--active')) {
            element.classList.remove('container__block--active');
        }
    })
}

window.addEventListener('resize', (event) => {
    if(window.innerWidth <= 768 && !cleanActiveWhenSmall) {
        cleanActiveWhenSmall = true;
    } else if(window.innerWidth > 768 && cleanActiveWhenSmall) {
        cleanActiveWhenSmall = false;
    }

    if(cleanActiveWhenSmall & !containerBlocks[0].classList.contains('container__block--active')) {
        if(containerBlocks[1].classList.contains('container__block--active') || containerBlocks[2].classList.contains('container__block--active'))
            return;
        
        removeClassAcitve();
        containerBlocks[0].classList.add('container__block--active');        
    }

}, true);