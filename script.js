document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("responseMessage").innerText = "Thank you! I'll get back to you soon.";
});
