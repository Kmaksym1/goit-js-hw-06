const sizeControlEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

sizeControlEl.addEventListener('input', control)

let fontS = 0
function control(elem){
    fontS = elem.currentTarget.value
    textEl.style.fontSize = `${fontS}px`;
}

