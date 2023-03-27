const nameInputEl = document.querySelector('#name-input')
console.dir(nameInputEl)
const nameOutputEl = document.querySelector('#name-output')
console.dir(nameOutputEl)

nameInputEl.addEventListener('input', onInput)
function onInput(event){
    let string = event.currentTarget.value.trim()
    if(string.length>0){
        nameOutputEl.textContent = string
    }else{
        nameOutputEl.textContent = "Anonymous!"
    }
    
}

