const elItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${elItem.length}`)
elItem.forEach(element => {
    console.log(` Category: ${element.firstElementChild.textContent}`)
    console.log(` Elements: ${element.lastElementChild.children.length}`)
    })
