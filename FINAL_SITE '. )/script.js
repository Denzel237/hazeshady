// Initialize EmailJS with your user ID // Initialize EmailJS with the public API key
emailjs.init('kIHy4xiV2pV8_DeRo'); // // Replace with your actual Public API Key

// Handle Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  // Get the form data
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    address: document.getElementById('address').value,
    phone: document.getElementById('phone').value,
    country: document.getElementById('country').value,
    desired_product: document.getElementById('desired-product').value,
    quantity: document.getElementById('quantity').value
  };

  // Send the email using EmailJS
  emailjs.send('service_ilz929o', 'template_gk9v4dk', formData) // Replace with your actual service id and template id
    .then(function(response) {
      // Success message
      document.getElementById('form-message').textContent = 'Order created successfully!';
      document.getElementById('contact-form').reset();
    })
    .catch(function(error) {
      // Error message
      document.getElementById('form-message').textContent = 'Something went wrong. Please try again.';
      console.error('Error sending email:', error);
    });
});