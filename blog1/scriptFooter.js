document.addEventListener('DOMContentLoaded', function() {
    // Fetch the footer.html file
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        // Insert the footer HTML into the placeholder
        document.getElementById('footer-placeholder').innerHTML = data;
  
        // Add the form event listener and the email validation functions
        var form = document.getElementById('mc-form');
        var emailInput = document.getElementById('email-input');
        var emailError = document.getElementById('email-error');
        var subscribeMessage = document.querySelector('.subscribe-message');
  
        // Add a submit event listener to the form
        form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission
  
          // Check if the email field is empty or contains only whitespace
          if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.'; // Set the error message
          } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email format.'; // Set the error message
          } else {
            // Email is valid and form can be submitted
            emailError.textContent = ''; // Clear any previous error messages
            showSuccessMessage();
            setTimeout(function() {
              hideSuccessMessage();
              emailInput.value = ''; // Clear the input field
            }, 2000); // Display for 2 seconds (2000 milliseconds)
          }
        });
  
        // Function to check if the input value is a valid email format
        function isValidEmail(email) {
          // Regular expression pattern for email validation
          var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailPattern.test(email);
        }
  
        // Function to display the success message
        function showSuccessMessage() {
          subscribeMessage.textContent = 'Thanks for subscribing!';
          subscribeMessage.classList.add('subscribe-success');
        }
  
        // Function to hide the success message
        function hideSuccessMessage() {
          subscribeMessage.textContent = '';
          subscribeMessage.classList.remove('subscribe-success');
        }
      });
  });
  