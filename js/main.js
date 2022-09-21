// button to scoll to the top of the page
let mybutton = document.getElementById("upButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// hamburger menu functionality
// function openSideMenu(){
//   document.getElementById('menu-display').classList.add('show-menu');
// }

// function closeSideMenu(){
//   document.getElementById('menu-display').classList.remove('show-menu');
// }

// document.getElementById('menu-trigger').addEventListener('click', closeSideMenu);
// document.getElementById('close-menu').addEventListener('click', openSideMenu);

// const menuControl = document.getElementById('menu-control');
// menuControl.addEventListener('click', function(){
//   document.querySelector('.menu').classList.toggle('menu-open');
// });
