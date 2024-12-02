const emailField = document.getElementById('email');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const productBody = document.querySelector('.text');
const confirmationMessage = document.querySelector('#successMessage p strong');
const dismissMessage = document.querySelector('dismiss-btn')

// Simple email validation regex
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

// Real-time validation as the user types in the email field
emailField.addEventListener('input', function() {
    const emailValue = emailField.value.trim();  // Get the current email input value

    // Check if the email matches the pattern
    if (emailValue === '') {
        // If the email field is empty, hide the error message
        errorMessage.style.display = 'none';
    } else if (!emailPattern.test(emailValue)) {
        // If the email doesn't match the pattern, display the error message
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
    } else {
        // If the email is valid, hide the error message
        errorMessage.style.display = 'none';
    }
});

// Add click event listener to the submit button
document.querySelector('.submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (default behavior)
    const emailValue = emailField.value.trim();  // Get the current email input value

    // Reset previous messages
    successMessage.style.display = 'none';

    // Check if the email is valid before showing success message
    if (emailValue === '') {
        errorMessage.textContent = 'Email is required.';
        errorMessage.style.display = 'block';
    } else if (!emailPattern.test(emailValue)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
    } else {
        // If the email is valid, show the success message
        successMessage.style.display = 'flex';
        productBody.style.display = 'none';
        confirmationMessage.textContent = emailValue; // Insert the entered email into the success message
        
        // Optionally clear the email input field after submission
        emailField.value = '';
    }
});

// Dismiss success message when clicking the dismiss button
document.querySelector('.dismiss-btn').addEventListener('click', function() {
    successMessage.style.display = 'none';

    // Reload the page after dismissing the success message
    window.location.reload();

});
