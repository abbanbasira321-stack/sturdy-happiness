const isAdmin =
  localStorage.getItem("ymaAdmin");

if (isAdmin !== "true") {
  window.location.href =
    "admin-login.html";
}

function loadPayments() {

  const paymentsList =
    document.getElementById(
      "paymentsList"
    );

  const payments =
    JSON.parse(
      localStorage.getItem(
        "ymaPayments"
      )
    ) || [];

  if (payments.length === 0) {

    paymentsList.innerHTML = `
      <div class="admin-card">

        <h3>📋 No Payments Yet</h3>

        <p>
          Payments za su bayyana nan
          bayan user ya sayi plan.
        </p>

      </div>
    `;

    return;
  }

  paymentsList.innerHTML = "";

  payments
    .slice()
    .reverse()
    .forEach(function (
      payment
    ) {

      paymentsList.innerHTML += `

        <div class="admin-card">

          <h3>💳 ${payment.plan}</h3>

          <p>
            📱 Phone:
            ${payment.phone}
          </p>

          <p>
            💰 Amount:
            ₦${payment.amount}
          </p>

          <p>
            📅 Date:
            ${payment.date}
          </p>

        </div>

      `;
    });
}

function goAdmin() {
  window.location.href =
    "admin.html";
}

window.onload =
  loadPayments;
