const form = document.getElementById('form');
const uName = document.getElementById('first-name');
const lastName = document.getElementById('last-name')
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('conf-password');



form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const nameValue = uName.value.trim();
    const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();


    if(nameValue === '') {
        setErrorFor(uName, 'Name cannot be blank');
    } else {
        setSuccessFor(uName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, ' *Passwords does not match');
    } else{
        setSuccessFor(password2);
    }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form_control form__password error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form_control form__conf-password success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}