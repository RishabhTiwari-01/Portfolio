
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
