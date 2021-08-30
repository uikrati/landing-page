/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sections=document.querySelectorAll('section');
const listItems=document.querySelectorAll('ul li');
/**
 * End Global Variables
 * Start Helper Functions

*/

window.addEventListener('scroll',()=>{
    let currentSection='';
    sections.forEach(section => {
      const top= section.offsetTop;
      const sectionHeight=section.clientHeight;
      if (pageYOffset>=(top-sectionHeight/3)) {
        currentSection=section.getAttribute('id');


      }

    })

listItems.forEach(li => {
  li.classList.remove('active') ;
  if(li.classList.contains(currentSection)){
     li.classList.add('active')
  }

})

});



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
