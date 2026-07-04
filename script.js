
// Intersection Observer for scroll animations
const fadeInSections = document.querySelectorAll('.fade-in-section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
fadeInSections.forEach(section => {
    observer.observe(section);
});


// Form submission handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Since we don't have a backend, we'll just show a success message
        formStatus.textContent = 'Thank you for your message! I will get back to you shortly.';
        formStatus.classList.add('text-green-600');
        contactForm.reset(); // Clear the form fields after "submission"
    });
}



/** Project section animation */

var a = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
a.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
})
a.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})





//**  moving name */
const nameText = "Hi, I'm Rishabh Tiwari";
const nameElement = document.getElementById('name2');
let i = 0;

function typeWriter() {
    if (i < nameText.length) {
        nameElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Har character ke beech ka delay (100ms)
    }
}

// Function ko page load hone par call karenge
window.onload = function() {
    typeWriter();
};








/// cursor animation

const cursor = document.querySelector("#cursor");
const blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (details) {
  // Cursor dot move karne ke liye
  cursor.style.left = details.x + "px";
  cursor.style.top = details.y + "px";
  
  // Blur effect ko thoda delay ke saath move karne ke liye
  blur.style.left = details.x - 100 + "px";
  blur.style.top = details.y - 100 + "px";
});

// Jab kisi Link ya Button par hover karein toh cursor bada ho jaye
const allLinks = document.querySelectorAll("a, button, .hover-effect");
allLinks.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #5F3434";
    cursor.style.backgroundColor = "#5F3434";
  });
});