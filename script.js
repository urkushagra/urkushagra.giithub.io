// 🌟 Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});


// 🎯 Active Section Highlight in Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// ⌨️ Typing Animation (Hero Section)
const text = ["Backend Developer", "Java Enthusiast", "AWS Learner"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (!isDeleting) {
        currentText = text[index].substring(0, charIndex++);
    } else {
        currentText = text[index].substring(0, charIndex--);
    }

    typingElement.textContent = currentText;

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === text[index].length) {
        isDeleting = true;
        speed = 1500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 🚀 Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);


// 🌙 Dark/Light Mode Toggle (Optional but 🔥)
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
}
