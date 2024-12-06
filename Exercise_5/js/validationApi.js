window.addEventListener('DOMContentLoaded', main)

function main() {
    console.log("aaaaaaaa");
    // Get the form and error message elements
    const form = document.getElementById('form');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const errorMessage = document.getElementById('error-message');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        checkCorrectPassword(password1, password2, errorMessage, event)
    });
}

function checkCorrectPassword(password1, password2, errorMessage, event) {
    // Prevent form submission if passwords do not match
    if (password1.value !== password2.value) {
        errorMessage.style.display = 'block';  // Show error message
        event.preventDefault();  // Prevent form from being submitted
    } else {
        errorMessage.style.display = 'none';  // Hide error message
    }
}

function checkLanguages() {
    
}

function checkEducationLevelHighOrOtherThenTopicOther() {
    
}
