window.addEventListener('DOMContentLoaded', main)

function main() {
    console.log("aaaaaaaa");
    // Get the form and error message elements
    const form = document.getElementById('form');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const languagesCheckboxes = document.querySelectorAll('input[name="languages"]'); // Get all language checkboxes

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        checkCorrectPassword(password1, password2, event)
        checkLanguages(languagesCheckboxes, event)
    });
}

function checkCorrectPassword(password1, password2, event) {
    // Prevent form submission if passwords do not match
    const errorMessage = document.getElementById('pass-error');
    if (password1.value !== password2.value) {
        errorMessage.style.display = 'block';  // Show error message
        password2.style.border = '2.5px solid red';  // Make border red
        event.preventDefault();  // Prevent form from being submitted
    } else {
        password2.style.border = '';
        errorMessage.style.display = 'none';  // Hide error message
    }
}

function checkLanguages(languagesCheckboxes, event) {
    // Check if at least one language checkbox is selected
    const errorMessage = document.getElementById('lang-error');
    const isChecked = Array.from(languagesCheckboxes).some(checkbox => checkbox.checked);

    if (!isChecked) {
        errorMessage.style.display = 'block';  // Show error message if no language is selected
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';  // Hide error message if at least one language is selected
    }
}

function checkEducationLevelHighOrOtherThenTopicOther() {

}
