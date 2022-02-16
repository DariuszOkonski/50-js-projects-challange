const navigation = document.querySelector('.navigation');
const btnOpen = document.querySelector('.navigation__open');
const btnClose = document.querySelector('.navigation__close');

btnOpen.addEventListener('click', () => {
    navigation.classList.add('navigation--active');
})

btnClose.addEventListener('click', () => {
    navigation.classList.remove('navigation--active');
})