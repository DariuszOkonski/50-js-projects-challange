const smallGlasses = document.querySelectorAll('.glass-small');
const glassesContainer = document.querySelector('.glasses-container');
let prevNumberOfGlasses = 0;
let currentNumber = 0;

glassesContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('glass')) {
        const howManyGlases = e.target.dataset.number
        
        if(prevNumberOfGlasses !== howManyGlases) {
            emptyGlasses(smallGlasses, smallGlasses.length)
            fillGlasses(smallGlasses, howManyGlases)
            prevNumberOfGlasses = e.target.dataset.number
        } else {
            const currentGlass = smallGlasses[howManyGlases];
            currentGlass.classList.toggle('active')
        }        
    }
})

function emptyGlasses(glasses, to) {
    for (let index = 0; index < to; index++) {
        glasses[index].classList.remove('active')        
    }
}

function fillGlasses(glasses, to) {
    for (let index = 0; index <= to; index++) {
        glasses[index].classList.add('active')        
    }
}