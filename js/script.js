const burger = document.querySelector('#burger')
const burgerMenu = document.querySelector('#menu')
burger.addEventListener('click', event =>{
    burgerMenu.classList.toggle('burger__menu--active')
})