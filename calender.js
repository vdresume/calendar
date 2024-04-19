document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('appointmentForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Example: Send form data to a backend endpoint using Fetch API
    fetch('your-backend-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        date: date,
        time: time
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful response from the server
      console.log('Appointment booked successfully:', data);
      // Clear form fields
      form.reset();
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with your fetch operation:', error);
    });
  });
});

// let from=document.querySelector('form')
let button = document.querySelector(".btn");
from.addEventListener("onsubmit", function () {
alert(
  "Thank you for choosing ITeKloud We will be Connect you shortly."
);
});
