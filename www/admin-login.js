function adminLogin() {
  const phone =
    document.getElementById("adminPhone").value;

  const password =
    document.getElementById("adminPassword").value;

  if (phone === "" || password === "") {
    alert("Cika dukkan bayanai");
    return;
  }

  // Admin login na gwaji
  if (
    phone === "08000000000" &&
    password === "admin123"
  ) {
    localStorage.setItem("ymaAdmin", "true");

    window.location.href =
      "admin.html";
  } else {
    alert("Admin Phone ko Password ba daidai ba ne ❌");
  }
}

function goUserLogin() {
  window.location.href =
    "index.html";
}
