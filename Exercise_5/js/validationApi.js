window.addEventListener('DOMContentLoaded', main)

function main() {
    const form = document.getElementById('form');
    const alertBox = document.getElementById("customAlertBox");
    const alertMessageContainer = document.getElementById("alertMessage");
    const closeImg = document.querySelector(".close");

    closeImg.addEventListener('click', function () {
        alertBox.style.display = "none";
        window.scrollTo(0, 0);
        setTimeout(() => {
            window.location.reload();
        }, 100);
    });

    form.addEventListener('submit', function (event) {
        const res1 = checkCorrectPassword(event);
        const res2 = checkLanguages(event);
        const res3 = checkEducationLevelHighOrOtherThenTopicOther(event);

        console.log("Validation results:", { res1, res2, res3 });

        if (res1 && res2 && res3) {
            event.preventDefault();

            alertMessageContainer.innerHTML = "Form submitted successfully!";
            alertBox.style.display = "block";
        } else {
            event.preventDefault();
            alert("Please correct the errors and try again.");
        }
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
        return false;
    } else {
        password2.style.border = '';
        errorMessage.style.display = 'none';
        return true;
    }
}

function checkLanguages(event) {
    const languagesCheckboxes = document.querySelectorAll('input[name="languages"]');
    const errorMessage = document.getElementById('lang-error');
    const isChecked = Array.from(languagesCheckboxes).some(checkbox => checkbox.checked);

    if (!isChecked) {
        errorMessage.style.display = 'block';
        event.preventDefault();
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
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
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
    }
}
