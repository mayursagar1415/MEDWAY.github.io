  // Mobile menu toggle
  document
  .querySelector("button.md\\:hidden")
  .addEventListener("click", function () {
    const menu = document.querySelector(".md\\:flex");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    menu.classList.toggle("flex-col");
    menu.classList.toggle("absolute");
    menu.classList.toggle("top-16");
    menu.classList.toggle("right-0");
    menu.classList.toggle("bg-white");
    menu.classList.toggle("w-full");
    menu.classList.toggle("p-4");
    menu.classList.toggle("shadow-lg");
  });

// Toggle mobile menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Toggle dropdown visibility on click
const userMenuButton = document.getElementById("user-menu-button");
const dropdownMenu = document.getElementById("dropdown-menu");

userMenuButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show"); // Toggle the visibility
});

// Close the dropdown if clicked outside
window.addEventListener("click", (e) => {
  if (
    !userMenuButton.contains(e.target) &&
    !dropdownMenu.contains(e.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});

 // Book Appointment Form Functionality
document.getElementById('appointment-form').addEventListener('submit', function(e) {
e.preventDefault(); // Prevent the form from submitting normally

const fullName = document.getElementById('full-name').value;
const mobileNumber = document.getElementById('mobile-number').value;
const location = document.getElementById('location').value;
const message = document.getElementById('message').value;

// Validate mobile number (10 digits only)
const mobilePattern = /^[0-9]{10}$/;
if (!mobilePattern.test(mobileNumber)) {
alert("Please enter a valid 10-digit mobile number.");
return;
}

// Show alerts for form data
alert(`Appointment details:
Name: ${fullName}
Mobile Number: ${mobileNumber}
Location: ${location}
Message: ${message}`);

// Simulate booking confirmation
alert("Your appointment has been booked successfully!");
});

// Newsletter Subscription Functionality
document.getElementById('subscribe-button').addEventListener('click', function() {
const email = document.getElementById('email').value;
if (!email) {
alert("Please enter a valid email address to subscribe.");
return;
}

alert(`Thank you for subscribing! We'll send updates to ${email}.`);
});

// Function to fetch the user's location
document.getElementById('fetch-location').addEventListener('click', function() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const locationField = document.getElementById('location');
  locationField.value = `Lat: ${lat}, Lon: ${lon}`; // Display latitude and longitude in the location field
}, function(error) {
  alert("Location fetching failed. Please try again.");
});
} else {
alert("Geolocation is not supported by your browser.");
}
});