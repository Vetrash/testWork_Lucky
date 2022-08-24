const menuItems = document.querySelectorAll('.menu li');
const borders = document.querySelectorAll('.orangeBorder');

const addBorder = (elem) => {
  const border = elem.target.nextSibling;
  borders.forEach((elm) => {
    elm.classList.remove('activDisplay');
  });
  border.classList.add('activDisplay');
};
menuItems.forEach((elem) => {
  elem.addEventListener('click', addBorder);
});
