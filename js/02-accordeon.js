const headers = document.querySelectorAll('[data-name="accordeon-title"]')

headers.forEach((item)=>{
   item.addEventListener('click', showContent)
})

function showContent() {
   const content = this.nextElementSibling;
   
   headers.forEach((item) => {
     const otherContent = item.nextElementSibling;
     if (content !== otherContent) {
       otherContent.classList.add('hidden');
     }
   });
   
   content.classList.toggle('hidden');
 }
 