const flags = document.querySelectorAll('.flag');
const spiralPos = [2.8, 3.7, 4.8, 5.8, 6.7];
const spiralPosAfter = [];
const border = document.querySelector('.border-elips');

const circleAnimate = () => {
  border.classList.add('activAnim');
  flags.forEach((flag) => {
    flag.classList.add('activAnim2');
  });
};

const spiralAnimate = (index) => {
  if (index >= flags.length) {
    circleAnimate();
  } else {
    const speed = 10;
    const r = flags[index].offsetWidth / 2;
    let radius = 0;
    let f = spiralPos[index];
    const s = (2 * Math.PI) / 180;
    const idClock = setInterval(() => {
      f += s;
      if (radius < 450 / 2) {
        radius += 5;
        const leftValue = (450 / 2) - r + radius * Math.sin(f);
        const rightValue = (450 / 2) - r - radius * Math.cos(f);
        flags[index].style.left = `${leftValue}px`;
        flags[index].style.top = `${rightValue}px`;
      } else {
        clearInterval(idClock);
      }
      spiralPosAfter[index] = f;
    }, speed);
    setTimeout(spiralAnimate, 400, index + 1);
  }
};

const app = () => {
  setTimeout(() => {
    spiralAnimate(0);
  }, 3000);
};

app();
