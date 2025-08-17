function generatePassword() {
  const length = document.getElementById("length").value;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeUppercase = document.getElementById("includeUppercase").checked;
  const includeSpecial = document.getElementById("includeSpecial").checked;

  let charset = "abcdefghijklmnopqrstuvwxyz";

  if (includeNumbers) charset += "0123456789";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeSpecial) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

  if (charset === "abcdefghijklmnopqrstuvwxyz") {
    alert("Select at least one option (Numbers / Uppercase / Special Characters)");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById("output").value = password;
}
