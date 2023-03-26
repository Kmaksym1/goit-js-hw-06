const nameInputEl = document.querySelector('#name-input')
console.dir(nameInputEl)
const nameOutputEl = document.querySelector('#name-output')
console.dir(nameOutputEl)

nameInputEl.addEventListener('input', onInput)
function onInput(event){

    if(event.currentTarget.value.length>0){
        nameOutputEl.textContent = event.currentTarget.value
    }else{
        nameOutputEl.textContent = "Anonymous!"
    }
    console.log (event.currentTarget.value.length)
}

