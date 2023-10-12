const button = document.querySelector('#button');
const content = document.querySelector('#content');

button.addEventListener('click', () => {
   
   if(content.classList.toggle('content-hidden')){
      button.textContent= "Open Block"
   } else{
      button.textContent= "Close Block"
   }


})