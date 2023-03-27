function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input')
const createEl = document.querySelector('button')
const destroyEl = document.querySelector('#controls')
const boxesEl = document.querySelector('#boxes')

inputEl.addEventListener('input', onInput)

function onInput(event){
  createEl.dataset.create = Number(event.currentTarget.value)
}

createEl.addEventListener('click', createBoxes)

function createBoxes(){
  let width = 20;
  let height = 20;
    for (let i = 0; i<createEl.dataset.create; i++){
      const newDiv = document.createElement('div')
      newDiv.classList.add('block')
      newDiv.style.width = `${width += 10}px`;
      newDiv.style.height = `${height += 10}px`;
      newDiv.style.background = `${getRandomHexColor()}`;
      boxesEl.append(newDiv)
    }
  }

destroyEl.lastElementChild.addEventListener('click', destroyBoxes)

function destroyBoxes(){
// let allNewDiv = document.querySelectorAll('.block')
// allNewDiv.forEach( e => e.remove() )
boxesEl.innerHTML = '';
}

//открываю ссылку git в google - работает, 
// почему в safari не работает задание №10?