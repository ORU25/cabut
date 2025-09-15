const form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const resultEmail = document.getElementById("resultEmail");
  const resultPass = document.getElementById("resultPass");
  if (email === "admin@gmail.com" && password === "admin") {
    resultEmail.textContent = "";
    resultPass.textContent = "";
    sessionStorage.setItem('email', email);
    alert("🎉 Login berhasil!");
    window.location.href = "home.html";
  } else {
    resultEmail.textContent = "❌ Email atau password salah!";
    resultEmail.style.color = "red";
    resultEmail.style.marginBottom = "1rem";
    resultPass.textContent = "❌ Email atau password salah!";
    resultPass.style.color = "red";
    resultPass.style.marginBottom = "1rem";
    alert("🚫 Email atau password salah. Silakan coba lagi! \n\n email: admin@gmail.com \n password: admin");
  }
});
