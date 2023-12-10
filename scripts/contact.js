// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var form = document.querySelector(".contact form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    var mainContent = document.querySelector("main");
    // Clear the current content
    mainContent.innerHTML = '';
    // Create the thank you message element
    var thankYouMessage = document.createElement("p");
    thankYouMessage.className = "thank-you-msg";
    thankYouMessage.style.fontSize = "24px"; // Set the font size to 24px
    thankYouMessage.textContent = "Thank you for your message!";
    // Append the thank you message to the main content
    mainContent.appendChild(thankYouMessage);
});
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

