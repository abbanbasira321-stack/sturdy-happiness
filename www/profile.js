function loadProfile() {

  const name =
    localStorage.getItem("ymaName") ||
    "YMA User";

  const phone =
    localStorage.getItem("ymaPhone") ||
    "Not added";

  const balance =
    Number(
      localStorage.getItem("ymaBalance")
    ) || 0;

  const activePlan =
    localStorage.getItem("ymaActivePlan") ||
    "No Active Plan";

  document.getElementById(
    "profileName"
  ).textContent = name;

  document.getElementById(
    "profilePhone"
  ).textContent = phone;

  document.getElementById(
    "profileBalance"
  ).textContent =
    "₦" + balance.toFixed(2);

  document.getElementById(
    "activePlan"
  ).textContent =
    activePlan;
}

function goBack() {
  window.location.href =
    "dashboard.html";
}

window.onload =
  loadProfile;
