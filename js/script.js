const burger = document.querySelector('.header__burger-btn');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function(){
    header.classList.toggle('open');
});



menu.addEventListener('click', e => {
    e._isClickWithInMenu = true;
});

burger.addEventListener('click', e => {
    e._isClickWithInMenu = true;
});

document.body.addEventListener('click', e =>{
    if (e._isClickWithInMenu) return;
    header.classList.remove('open')
})