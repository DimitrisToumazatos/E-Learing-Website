window.addEventListener('DOMContentLoaded', main)

function main() {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        checkCorrectPassword(event)
        checkLanguages(event)
        checkEducationLevelHighOrOtherThenTopicOther(event)
    });
}

function checkCorrectPassword(event) {
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const errorMessage = document.getElementById('pass-error');
    if (password1.value !== password2.value) {
        errorMessage.style.display = 'block';
        password2.style.border = '2.5px solid red';
        event.preventDefault();
    } else {
        password2.style.border = '';
        errorMessage.style.display = 'none';
    }
}

function checkLanguages(event) {
    const languagesCheckboxes = document.querySelectorAll('input[name="languages"]');
    const errorMessage = document.getElementById('lang-error');
    const isChecked = Array.from(languagesCheckboxes).some(checkbox => checkbox.checked);

    if (!isChecked) {
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';
    }
}

function checkEducationLevelHighOrOtherThenTopicOther(event) {
    const educationlevel = document.getElementById("educationLevel");
    const educationtopic = document.getElementById("educationTopic");
    const errorMessage = document.getElementById('edu-error');

    const valueLevel = educationlevel.options[educationlevel.selectedIndex].value;
    const valueTopic = educationtopic.options[educationtopic.selectedIndex].value;

    if ((valueLevel == "highschool" || valueLevel == "other") && valueTopic !== "other" ){
        errorMessage.style.display = 'block';
        educationlevel.style.border = '1.5px solid red';
        educationlevel.style.outline = '1.6px solid red';
        educationtopic.style.border = '1.5px solid red';
        educationtopic.style.outline = '1.6px solid red';
        event.preventDefault();
    }else {
        errorMessage.style.display = 'none';
    }
}
