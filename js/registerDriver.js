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
  } else {
    result.textContent = "";
    resultConfirm.textContent = "";
    result.style.marginBottom = "0rem";
    resultConfirm.style.marginBottom = "0rem";
  }

  return true;
}

function validateNik() {
  const nik = document.getElementById("nik").value.trim();
  const result = document.getElementById("resultNik");

  const regex = /^[0-9]{16}$/;

  if (!regex.test(nik)) {
    result.textContent = "❌ NIK tidak valid! (harus 16 digit angka)";
    result.style.color = "red";
    result.style.marginBottom = "1rem";
    return false;
  } else {
    result.textContent = "";
    result.style.marginBottom = "0rem";
  }
  return true;
}

function validatePlat() {
  const plat = document.getElementById("plat").value.trim().toUpperCase();
  const result = document.getElementById("resultPlat");
  const regex = /^[A-Z]{1,2}\s[0-9]{1,4}\s[A-Z]{1,3}$/;

  if (!regex.test(plat)) {
    result.textContent = "❌ Plat tidak valid! Contoh: B 1234 XYZ";
    result.style.color = "red";
    result.style.marginBottom = "1rem";
    return false;
  } else {
    result.textContent = "";
    result.style.marginBottom = "0rem";
  }
  return true;
}

const form = document.getElementById("form-register");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  validatePhone();
  validatePassword();
  validateNik();
  validatePlat();

  if (
    validatePhone() &&
    validatePassword() &&
    validateNik() &&
    validatePlat()
  ) {
    alert("🎉 Registrasi berhasil!");
    window.location.href = "login.html";
  }
});
