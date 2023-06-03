const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.menu');
const menuCruz = document.querySelector('.menu_cross')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

hamburguesa.addEventListener('click', ()=> {
    menu.classList.add('open');
});

menuCruz.addEventListener('click', ()=> {
    menu.classList.remove('open');
});
