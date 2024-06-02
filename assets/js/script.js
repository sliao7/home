document.addEventListener("DOMContentLoaded", () => {
    const bubblesContainer = document.querySelector('.bubbles-container');
    const bubbleCount = 150; // Number of bubbles

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.width = bubble.style.height = `${2 + Math.random() * 1}px`; // Random size between 5px and 20px
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.animationDuration = `${10 + Math.random() * 5}s`; // Random duration between 10s and 15s
        bubblesContainer.appendChild(bubble);
    }
});

$('.nav').click(function() {
    var id = $(this).attr('id');
    $('html, body').animate({
        scrollTop: ($('#' + id + '.section').offset().top)
    }, 1000);
});

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

