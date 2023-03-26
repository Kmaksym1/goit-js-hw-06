const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEL = document.querySelector('.gallery')
console.dir(galleryEL)
const elementEl = images.map(el=>
`<li class="li-style" 
style="list-style-type: none; 
display: flex;
margin-bottom: 10px">
<img src = '${el.url}' alt='${el.alt}' style="width: 300px; box-shadow: 6px 3px 3px grey;">
</>`).join('')

console.dir(elementEl)

galleryEL.insertAdjacentHTML('beforeend',elementEl)
