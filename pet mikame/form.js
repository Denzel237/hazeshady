const btn = document.getElementById('button');
const successMessageElement = document.getElementById('form-message');  // Get the success message element

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    btn.value = 'Sending...'; // Change button text to "Sending..."

    const serviceID = 'default_service';
    const templateID = 'template_eqi127p';

    // Send the form data via EmailJS
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email'; // Reset button text

        // Show the success message
        successMessageElement.textContent = 'Your order has been placed successfully! We will contact you shortly.';
        successMessageElement.style.display = 'block';  // Make the success message visible

        // Optionally, reset the form
        document.getElementById('form').reset();

        // Optionally, hide the message after a few seconds
        setTimeout(() => {
          successMessageElement.style.display = 'none';  // Hide the success message after 5 seconds
        }, 5000);
      })
      .catch((err) => {
        btn.value = 'Send Email'; // Reset button text on error

        // Display the error in the console and show the message
        console.error('Error sending email:', err);
        alert('Failed to send email. Please try again later.');

        // Optionally, display the error message on the page
        successMessageElement.textContent = 'Something went wrong. Please try again.';
        successMessageElement.style.color = 'red';  // Change text color to red for error
        successMessageElement.style.display = 'block';  // Show the error message
      });
});