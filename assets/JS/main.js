// =================Parallax================
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax-layer").forEach((layer) => {
    const speed = parseFloat(layer.getAttribute("data-speed")) || 0.3;
    layer.style.transform = `translateY(${scrollY * speed}px)`;
  });
});


// Set the date we're counting down to

// =================TIMER================

var countDownDate = new Date("Mar 29, 2025 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"

  // ===========need to fix the timer to display in the format of days:hours:minutes:seconds==========

  console.log(document.querySelector("#days-count").textContent);
  document.querySelector("#days-count").textContent = days;
  document.querySelector("#hours-count").textContent = hours;
  document.querySelector("#mins-count").textContent = minutes;
  document.querySelector("#secs-count").textContent = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".timer-caption").innerHTML = "Hackathon Ended";
    document.querySelector("#days-count").textContent = "00";
    document.querySelector("#hours-count").textContent = "00";
    document.querySelector("#mins-count").textContent = "00";
    document.querySelector("#secs-count").textContent = "00";
    return;
  }


  // document.getElementById("timer").innerHTML = days + " : " + hours + " : "
  //   + minutes + " : " + seconds + "  ";

  // // If the count down is over, write some text 
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("timer").innerHTML = "EXPIRED";
  // }
}, 1000);



// =================Navigation Menu=================
function navFunction() {
  const navList = document.querySelector(".nav-list");
  const navToggler = document.querySelector(".nav-toggler");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  function updateNavList() {
    if (window.innerWidth > 576) {
      navList.classList.remove("active");
      navMenu.classList.remove("active");
      navToggler.classList.remove("open");
      body.classList.remove("nav-open");
    }
  }

  // Check screen width on load
  updateNavList();

  // Check screen width on resize
  window.addEventListener('resize', updateNavList);

  // Toggle classes on navToggler click
  navToggler.addEventListener("click", function () {
    navToggler.classList.toggle("open");
    navList.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("nav-open");
  });

  // Remove classes on navList item click
  navList.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function () {
      navToggler.classList.remove("open");
      navList.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("nav-open");
    });
  });
}

// Initialize the navigation function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', navFunction());

function changeClass() {
  var x = document.getElementsByClassName('cyber-button-small');
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.Width;
  console.log(width);
  if (x.length > 0) {
    if (width <= 640) {
      x[0].className = 'cyber-button bg-red';
    } else {
      x[1].className = "cyber-button-small";
    }
  }
}

$(document).ready(function () {
  $(".accordion-title").click(function (e) {
    var accordionitem = $(this).attr("data-tab");
    $("#" + accordionitem)
      .slideToggle()
      .parent()
      .siblings()
      .find(".accordion-content")
      .slideUp();

    $(this).toggleClass("active-title");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title")
      .removeClass("active-title");

    $("i.fa-chevron-down", this).toggleClass("chevron-top");
    $("#" + accordionitem)
      .parent()
      .siblings()
      .find(".accordion-title i.fa-chevron-down")
      .removeClass("chevron-top");
  });
});

// ====================== Scroll Reveal ======================

// Function to apply ScrollReveal to all elements with a specific class
// function applyScrollReveal(selector) {
//   const elements = document.querySelectorAll(selector);
//   elements.forEach(element => {
//     ScrollReveal().reveal(element);
//   });
// }

// Apply ScrollReveal to all relevant sections
// document.addEventListener('DOMContentLoaded', function() {
//   applyScrollReveal('.about-stats');
//   applyScrollReveal('.prize-section');
//   applyScrollReveal('.tracks-section');
//   applyScrollReveal('.sponsor-section');
//   applyScrollReveal('.judges-section');
//   applyScrollReveal('.footer-section');
// });


/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '60px',
//   duration: 2500,
//   delay: 2000,
//   // reset: true
// })

// sr.reveal('.timer-section, .buttons, .about-us, .about0us-desc')
// sr.reveal('.home__info div', { delay: 600, origin: 'bottom', interval: 75 })
// sr.reveal(`.skills__content:nth-child(1), contact__content:nth-child(1)`, { origin: 'left' })
// sr.reveal('.skills__content:nth-child(2), contact__content:nth-child(2)', { origin: 'right' })
// sr.reveal('.qualification__content, .services__card', { interval: 75 })