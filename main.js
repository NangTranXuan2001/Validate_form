var username = document.querySelector("#username")
var email = document.querySelector("#email")
var password = document.querySelector("#password")
var confirmPassword = document.querySelector("#confirm-password")
var form = document.querySelector("form")

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector("small")
    parent.classList.add("error")
    small.innerHTML = message

}

function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector("small")
    parent.classList.remove("error")
    small.innerHTML = ""
}

function checkEmptyError(listInput) {
    let isEmptyError = false;

    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            isEmptyError = true;
            showError(input, "Khong duoc de trong")
        } else {
            showSuccess(input)
        }
    })
    return isEmptyError
}

function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let isEmailError = !regexEmail.test(input.value)
    input.value = input.value.trim()
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, "Email Invalid!")
    }
}

function checkLengthError(input, min = 5, max = 30) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ki tu`)
        return true
    }

    if (input.value.length > max) {
        showError(input, `Khong duoc qua ${max} ki tu`)
        return true
    }

    showSuccess(input)
    return false
}

function checkMatchPasswordError(password, confirmPassword) {
    if (password.value !== confirmPassword) {
        showError(confirmPassword, "Passwords do not match")
        return true
    }
}

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username)
    let isPasswordLengthError = checkLengthError(password)
    let isCfPasswordLengthError = checkLengthError(confirmPassword)

    let isMatchError = checkMatchPasswordError(password, confirmPassword)

    if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isCfPasswordLength) {
        //do nothing
    } else {
        //logic, call API, ...
    }
})