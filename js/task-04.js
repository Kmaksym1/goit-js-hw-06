const counterEl = document.querySelector('#counter')
const counterResultEl = document.querySelector('#value')

let counterValue = 0;

counterEl.firstElementChild.addEventListener('click', countpluse)
function countpluse(event){
    counterResultEl.textContent = `${counterValue += 1}`
}

counterEl.lastElementChild.addEventListener('click', countminuse)
function countminuse(){
    counterResultEl.textContent = `${counterValue -= 1}`
}
