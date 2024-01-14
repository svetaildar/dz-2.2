 'use strict'

 
 console.log(document);
 //const heading = document;
//  or('h1')
//  const headingclass = document.querySelector('.h1')

// console.log(heading)
// console.log(headingclass)

 //const header = document.querySelector()

 const heading = document.querySelector('.h1')
 heading.addEventListener('click', () => {
   console.log('clicked')
   heading.classList.toggle('is--active')
 })

 //const foo = () => {

 //}
//<script>
const navbar1 = document.querySelector ('.navbar1'); 

 window.addEventListener('scroll', () => {
         let scrollPos = window.scrollY;
         if(scrollPos > 0) {
         navbar1.classList.add('red');
         } else {
          navbar1.classList.remove('red');
         }
        
 });
//</script>

<script>
const button = document.querySelector('.button')
 button.addEventListener('click', () => {
   
   heading.classList.toggle('bt--active')
 })

</script>


//mouseover / mouseout – когда мышь наводится на / покидает элемент.
const img = document.querySelector('.img'); 

 img.addEventListener('mouseover', () => {
          img.classList.add('is--over')
         });
         ('mouseout', () => {
          img.classList.remove('is--over');
         }
         )


         
<script>
    const img = document.querySelector('.img');

    img.addEventListener('mouseover', () => {
        img.classList.add('is--over');
    });

    img.addEventListener('mouseout', () => {
        img.classList.remove('is--over');
    });
</script>

 