// Get references to DOM elements
// Select elements
// Optionally, if you want to add dynamic behavior to the h1
// Change text content dynamically after a delay
setTimeout(() => {
  announcement.textContent = "🎶 Exciting Songs Are on Their Way!";
}, 4000);

const description = document.getElementById('description');

// Button hover and click interaction
button.addEventListener('mouseenter', () => {
  announcement.textContent = "🎶 A Surprise Awaits!";
  description.textContent = "Hover over the button to feel the excitement!";
});

button.addEventListener('mouseleave', () => {
  announcement.textContent = "🎵 Songs Coming Soon 🎵";
  description.textContent = "Stay tuned! Exciting tracks are on their way.";
});

button.addEventListener('click', () => {
  button.textContent = "You're Subscribed!";
  button.style.background = "#43a047"; // Green for success
  description.textContent = "Thank you for your interest. We'll notify you soon!";
  setTimeout(() => {
    button.textContent = "Get Notified";
    button.style.background = "#1e88e5"; // Reset color
    description.textContent = "Stay tuned! Exciting tracks are on their way.";
  }, 3000); // Reverts after 3 seconds
});

const button = document.getElementById('interactiveButton');
const announcement = document.getElementById('announcement');

// Add hover effect
button.addEventListener('mouseenter', () => {
  announcement.textContent = "👀 Stay tuned for amazing songs!";
});

button.addEventListener('mouseleave', () => {
  announcement.textContent = "🎵 Songs will be added shortly 🎵";
});

// Add click event
button.addEventListener('click', () => {
  console.log("Button clicked! Songs are on the way.");
  button.textContent = "Thank you for your patience!";
  setTimeout(() => {
    button.textContent = "Click or Hover Me!";
  }, 2000); // Reverts text after 2 seconds
});