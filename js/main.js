// button to scoll to the top of the page
let mybutton = document.getElementById("upButton");
window.onscroll = function () { scrollFunction() };

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


// hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


// scrolls page on index.html down to each element when clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behaviour: "smooth"
    });
  });
});

//countdown to Little List launch
let todaysDate = new Date();
var dd = String(todaysDate.getDate()).padStart(2, '0');
var mm = String(todaysDate.getMonth() + 1).padStart(2, '0'); 
var yyyy = todaysDate.getFullYear();

todaysDate = dd + '/' + mm + '/' + yyyy;
document.getElementById('todayDate').innerHTML = todaysDate;

let addZero = num => num < 10 ? `0${num}`: num;

function countdown(){

    let daysUntil = document.getElementById("days");
    let hoursUntil = document.getElementById("hours");
    let minsUntil = document.getElementById("mins");
    let secsUntil = document.getElementById("secs");

    let today = new Date();
    // console.log(today);
    let todayTime = today.getTime();
    // console.log(todayTime);

    let launchDay = new Date(2023, 1, 22, 8, 0);
    // console.log(launchDay);
    let launchTime = launchDay.getTime();
    let timeUntil = launchTime - todayTime;
    // console.log(timeUntil);

    if(launchTime < todayTime){
        clearInterval(i);
        document.querySelector('.h3').innerHTML = "Countdown has expired";
    } else {
        let oneMin = 60 * 1000;
    let oneHour = 60 * oneMin;
    let oneDay = 24 * oneHour;

    let daysLeft = Math.floor(timeUntil / oneDay);
    let hoursLeft = Math.floor((timeUntil % oneDay) / oneHour);
    let minsLeft = Math.floor((timeUntil % oneHour) / oneMin);
    let secsLeft = Math.floor((timeUntil % oneMin) / 1000);
    // console.log(daysLeft, hoursLeft, minsLeft, secsLeft);

    daysUntil.textContent = addZero(daysLeft);
    hoursUntil.textContent = addZero(hoursLeft);
    minsUntil.textContent = addZero(minsLeft);
    secsUntil.textContent = addZero(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();

//Contact form validation

// window.addEventListener('load', () =>{
//   const contactForm = document.querySelector('contact-form');
//   const emailAdd = document.querySelector('email');
//   const taskList = document.querySelector('lists');
  
//   contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();



//   })
// })

