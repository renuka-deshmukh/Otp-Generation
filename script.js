
const form = document.getElementById("registerForm")

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();


    const name = document.getElementById("fName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');


    let isValid = true;

    if (name.length < 2) {
        document.getElementById("nameError").textContent = "Name must be atleast 2 characters."
        isValid = false;
    } else {
        document.getElementById("nameValid").textContent = "Valid Name."
    }

    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Enter valid email."
        isValid = false;
    } else {
        document.getElementById("emailValid").textContent = "Valid Email."
    }

    if (mobile.length != 10) {
        document.getElementById("numberError").textContent = "Mobile Number should be 10 digits "
        if (mobile[0] == 0) {
            document.getElementById("numberError").textContent = "Mobile Number should not start with 0"
        }
        isValid = false;
    } else {
        document.getElementById("numberValid").textContent = "Valid Number"
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Please select gender"
        isValid = false;
    }
    else {
        document.getElementById("genderValid").textContent = "Gender Selected"
    }

    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;

    if (!pattern.test(password)) {
        document.getElementById("passwordError").textContent = ("Password must have 8+ characters, uppercase, lowercase, number, and special character.");
        isValid = false;

        if (password !== confirmPassword) {
            document.getElementById("passwordCError").textContent = "Password do not matches";
            isValid = false;
        }
    } else {
        document.getElementById("passwordCValid").textContent = "Valid Password"
    }


    if (isValid) {
        document.getElementById("successfulMsg").classList.remove("d-none");
        form.reset();

    }


})