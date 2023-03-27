const textEl = document.getElementById('validation-input')
textEl.addEventListener("blur", onInput);

function onInput (event) {
    let setLength = Number(textEl.dataset.length)
    let currentLength = event.currentTarget.value.trim().length
    if(  currentLength === setLength){
        textEl.classList.add('valid')
        textEl.classList.remove('invalid')
    } else{
    textEl.classList.remove('valid')        
textEl.classList.add('invalid')
    }
  }