function login() {
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  if (phone === "" || password === "") {
    alert("Please enter phone number and password");
    return;
  }

  alert("Login successful!");
}

function signup() {
  alert("Create Account page zai zo nan gaba.");
}
