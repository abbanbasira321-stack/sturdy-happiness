const isAdmin =
  localStorage.getItem("ymaAdmin");

if (isAdmin !== "true") {
  window.location.href =
    "admin-login.html";
}

function loadUsers() {
  const usersList =
    document.getElementById("usersList");

  const name =
    localStorage.getItem("ymaName");

  const phone =
    localStorage.getItem("ymaPhone");

  if (!name || !phone) {
    usersList.innerHTML = `
      <div class="user-card">
        <h3>Ba a samu users ba</h3>
        <p>Users da suka yi signup za su bayyana nan.</p>
      </div>
    `;

    return;
  }

  usersList.innerHTML = `
    <div class="user-card">

      <div class="user-icon">👤</div>

      <div class="user-info">

        <h3>${name}</h3>

        <p>📱 ${phone}</p>

        <p class="user-status">
          🟢 Active
        </p>

      </div>

    </div>
  `;
}

function goAdmin() {
  window.location.href =
    "admin.html";
}

window.onload =
  loadUsers;
