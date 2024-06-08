document.addEventListener("DOMContentLoaded", () => {
    const bubblesContainer = document.querySelector(".homebackground");
    const bubbleCount = 216; // Number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}vh`; // Random vertical starting position
        bubble.style.width = bubble.style.height = `${2 + Math.random() * 1}px`; // Random size between 5px and 20px
        bubble.style.animationDelay = `${Math.random() * 2}s`;
        bubble.style.animationDuration = `${10 + Math.random() * 5}s`; // Random duration between 10s and 15s
        bubblesContainer.appendChild(bubble);
    }
})

// assets/js/script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('.navbar a');

//     for (const link of links) {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();

//             const targetId = link.getAttribute('href').substring(1);
//             const targetSection = document.getElementById(targetId);

//             if (targetSection) {
//                 window.scrollTo({
//                     top: targetSection.offsetTop - 50, // Adjust for navbar height
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     }
// });


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('navbar-colored');
    } else {
      navbar.classList.remove('navbar-colored');
      navbar.classList.add('navbar-transparent');
    }
  });