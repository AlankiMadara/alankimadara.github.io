// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("responseMessage").innerText = "Thank you! I'll get back to you soon.";
});

// Scroll Animations
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 300);
    });
});
