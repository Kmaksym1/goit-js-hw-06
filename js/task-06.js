const textEl = document.querySelector('input')

textEl.addEventListener("blur", onInput);

function onInput (event) {
    let setLength = textEl.getAttribute('data-length')
    let currentLength = event.currentTarget.value.length
    if(  currentLength < setLength){
        textEl.classList.add('invalid')
    } else{
        textEl.classList.add('valid')

    }
  }
  

