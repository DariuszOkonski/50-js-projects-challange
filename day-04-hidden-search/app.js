const button = document.querySelector('[data-button]');
const container = document.querySelector('[data-container]');
const input = document.querySelector('[data-input]')

button.addEventListener('click', () => {
    container.classList.toggle('container--active')
    setTimeout(() => {
        input.value = ''        
    }, 500);
    input.focus();
})