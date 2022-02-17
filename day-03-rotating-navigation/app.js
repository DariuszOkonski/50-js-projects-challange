const navigation = document.querySelector('.navigation');
const navigationSide = document.querySelector('.navigation-side');
const btnOpen = document.querySelector('.navigation__open');
const btnClose = document.querySelector('.navigation__close');
const content = document.querySelector('.content');

btnOpen.addEventListener('click', () => {
    navigation.classList.add('navigation--active');
    navigationSide.classList.add('navigation-side--active');
    content.classList.add('content--active');
})

btnClose.addEventListener('click', () => {
    navigation.classList.remove('navigation--active');
    navigationSide.classList.remove('navigation-side--active');
    content.classList.remove('content--active');
})