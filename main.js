const hamMenu = document.querySelector('#mobileMenu');
const el = document.querySelector('.navbarMenu');

const mobMenu = ()=>{
    hamMenu.classList.toggle('is-active');
    el.classList.toggle('active')
};

hamMenu.addEventListener('click', mobMenu);