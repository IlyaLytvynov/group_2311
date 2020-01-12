import "./lesson_12.scss";

const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
  return `rgb(${getRandomNumber(255)}, ${getRandomNumber(
    255
  )}, ${getRandomNumber(255)})`;
};

const btns = document.querySelectorAll(".btn");

const toggleOff = () => {
  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove("toggled");
    btns[i].style.backgroundColor = "";
  }
};

const toggleOn = btn => {
  btn.classList.add("toggled");
  btn.style.backgroundColor = getRandomColor();
};

for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = () => {
    toggleOff();
    toggleOn(btns[i]);
  };
}
