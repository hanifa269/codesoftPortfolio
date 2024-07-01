// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Example: Send form data to server (replace with your actual implementation)
    console.log('Form submitted with values:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});

// Google Maps API (replace YOUR_API_KEY with your actual API key)
function initMap() {
    // The location of your office
    var office = { lat: 40.7128, lng: -74.0060 };

    // The map, centered at your office
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: office,
    });

    // The marker, positioned at your office
    var marker = new google.maps.Marker({
        position: office,
        map: map,
    });
}

// Call the initMap function when the window loads
window.onload = function () {
    initMap();
};
