function toggleDarkMode() {
  const toggle =
    document.getElementById("darkModeToggle");

  if (toggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("ymaDarkMode", "on");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("ymaDarkMode", "off");
  }
}

function toggleNotifications() {
  const toggle =
    document.getElementById("notificationToggle");

  if (toggle.checked) {
    localStorage.setItem("ymaNotifications", "on");
    alert("Notifications an kunna 🔔");
  } else {
    localStorage.setItem("ymaNotifications", "off");
    alert("Notifications an kashe 🔕");
  }
}

function changePassword() {
  const newPassword =
    prompt("Shigar da sabon password:");

  if (
    newPassword === null ||
    newPassword.trim() === ""
  ) {
    return;
  }

  localStorage.setItem(
    "ymaPassword",
    newPassword
  );

  alert("An canza password successfully ✅");
}

function goBack() {
  window.location.href =
    "dashboard.html";
}

window.onload = function () {
  const darkMode =
    localStorage.getItem("ymaDarkMode");

  const notifications =
    localStorage.getItem("ymaNotifications");

  if (darkMode === "on") {
    document.body.classList.add("dark-mode");

    document.getElementById(
      "darkModeToggle"
    ).checked = true;
  }

  if (notifications === "on") {
    document.getElementById(
      "notificationToggle"
    ).checked = true;
  }
};
