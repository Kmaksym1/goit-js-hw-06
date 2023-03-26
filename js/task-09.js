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
body.style.backgroundColor = getRandomHexColor()
colorEL.textContent = getRandomHexColor()
buttonEL.style.backgroundColor = getRandomHexColor()
buttonEL.style.border = '0px'
buttonEL.style.boxShadow = '3px 2px 2px gray'

}