
document.getElementById("registerForm").addEventListener("submit", function (e){
    e.preventDefault();
console.log("Data Submited Successfully")

const name = document.getElementById("fName").value.trim();
const email = document.getElementById("email").value.trim();
const mobile = document.getElementById("mobile").value.trim();
const password = document.getElementById("password").value.trim();
const confirmPassword = document.getElementById("confirmPassword").value.trim();


let isValid = true;

if(name.length<2){
    document.getElementById("nameError").textContent = "Name must be atleast 2 characters."
    isValid = false;
}

if( mobile.length != 10){
    document.getElementById("numberError").textContent = "Mobile Number should be 10 digits "
    if( mobile[0]==0){
        document.getElementById("numberError").textContent = "Mobile Number should not start with 0"
    }
isValid = false;
}

const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;

if (!pattern.test(password)) {
    document.getElementById("passwordError").textContent =("Password must have 8+ characters, uppercase, lowercase, number, and special character.");
    return;
    
  }

  if (password !== confirmPassword){
    document.getElementById("passwordCError").textContent ="Password do not matches";
    return;
  }

document.getElementById("successfulMsg").textContent = "Registered Successfullyy..."

})