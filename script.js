 // JavaScript for Hamburger Menu and Typewriter Effect
 function hamburg() {
    document.querySelector(".dropdown").style.transform = "translateY(0)";
}

function cancel() {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
}

// Typewriter Effect
const typewriterText = document.querySelector('.typewriter-text');
const textArray = ["Software Engineer", "Web Developer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typewriterText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typewriterText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

// Start Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Function to open default email client
function sendEmail() {
    window.location.href = "mailto:jeanmuhire@example.com";
}


