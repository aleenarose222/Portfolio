document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("thankYouMessage").style.display = "block";
    this.reset(); // Reset the form fields
});
