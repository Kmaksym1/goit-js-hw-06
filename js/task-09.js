function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEL = document.querySelector('.change-color')
const body = document.querySelector('body')
const colorEL = document.querySelector('.color')

buttonEL.addEventListener('click', changeColor)

function changeColor(){
  let color = getRandomHexColor()
  body.style.backgroundColor = color;
  colorEL.textContent = color
}