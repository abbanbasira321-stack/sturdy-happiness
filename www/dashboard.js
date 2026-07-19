const isLoggedIn =
  localStorage.getItem("ymaLoggedIn");

if (isLoggedIn !== "true") {
  window.location.href =
    "index.html";
}

function logout() {
  localStorage.removeItem(
    "ymaLoggedIn"
  );

  window.location.href =
    "index.html";
}
