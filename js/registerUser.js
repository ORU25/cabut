function validatePhone() {
  const telepon = document.getElementById("telepon").value.trim();
  const result = document.getElementById("resultTelp");

  const regex = /^(?:\+62|0)[0-9]{8,12}$/;

  if (regex.test(telepon)) {
    result.textContent = "";
    result.style.marginBottom = "0rem";
  } else {
    result.textContent = "❌ Nomor telepon tidak valid!";
    result.style.color = "red";
    result.style.marginBottom = "1rem";
    return false;
  }

  return true;
}

function validatePassword() {
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const result = document.getElementById("resultPass");
  const resultConfirm = document.getElementById("resultConfirmPass");

  if (password != confirmPassword) {
    result.textContent = "❌ Password dan konfirmasi password tidak cocok!";
    result.style.color = "red";
    result.style.marginBottom = "1rem";
    resultConfirm.textContent =
      "❌ Password dan konfirmasi password tidak cocok!";
    resultConfirm.style.color = "red";
    resultConfirm.style.marginBottom = "1rem";
    return false;
  }else{
      result.textContent = "";
      resultConfirm.textContent = "";
      result.style.marginBottom = "0rem";
      resultConfirm.style.marginBottom = "0rem";
  }

  return true;
}

const form = document.getElementById("form-register");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  validatePhone();
  validatePassword();

  if (validatePhone() && validatePassword()) {
    alert("🎉 Registrasi berhasil!");
    window.location.href = "login.html";
  }
});
