const containerBlocks = document.querySelectorAll('.container__block');


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

