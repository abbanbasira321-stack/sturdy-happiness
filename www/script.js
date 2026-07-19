function login() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;

  if (phone === "" || password === "") {
    alert("Please enter phone number and password");
    return;
  }

  const user = JSON.parse(localStorage.getItem("ymaUser"));

  if (!user) {
    alert("Babu account. Da farko ka danna Create Account.");
    return;
  }

  if (phone !== user.phone || password !== user.password) {
    alert("Phone number ko password ba daidai ba ne.");
    return;
  }

  localStorage.setItem("ymaLoggedIn", "true");
  window.location.href = "dashboard.html";
}

function signup() {
  window.location.href = "signup.html";
}
