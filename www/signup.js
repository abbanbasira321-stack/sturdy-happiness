function createAccount() {
  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const password =
    document.getElementById("password").value;

  const confirmPassword =
    document.getElementById("confirmPassword").value;

  if (
    name === "" ||
    phone === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const user = {
    name: name,
    phone: phone,
    password: password
  };

  localStorage.setItem(
    "ymaUser",
    JSON.stringify(user)
  );

  localStorage.setItem(
    "ymaName",
    name
  );

  localStorage.setItem(
    "ymaPhone",
    phone
  );

  localStorage.setItem(
    "ymaPassword",
    password
  );

  alert(
    "Account created successfully! ✅"
  );

  window.location.href =
    "index.html";
}

function goLogin() {
  window.location.href =
    "index.html";
}
