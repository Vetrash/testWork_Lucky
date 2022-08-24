const burgerIMG = document.querySelector('.burger-img');
const burgerMenu = document.querySelector('.burger-menu');
const body = document.querySelector('body');
const burgerline = document.querySelectorAll('.burger-line');

const switcherBurger = () => {
  burgerMenu.classList.toggle('activ-burger-menu');
  body.classList.toggle('lock');
};
burgerline.forEach((elem) => {
  elem.addEventListener('click', switcherBurger);
});
burgerIMG.addEventListener('click', switcherBurger);
