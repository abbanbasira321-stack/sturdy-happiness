const isAdmin =
  localStorage.getItem("ymaAdmin");

if (isAdmin !== "true") {
  window.location.href =
    "admin-login.html";
}

function adminLogout() {
  localStorage.removeItem("ymaAdmin");

  window.location.href =
    "admin-login.html";
}
