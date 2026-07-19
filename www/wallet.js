function getBalance() {
  return Number(
    localStorage.getItem("ymaBalance") || 0
  );
}

function saveBalance(balance) {
  localStorage.setItem(
    "ymaBalance",
    balance.toString()
  );
}

function updateBalance() {
  const balanceElement =
    document.getElementById("balance");

  if (balanceElement) {
    balanceElement.textContent =
      "₦" + getBalance().toFixed(2);
  }
}

function topUp() {
  const amount =
    prompt(
      "Shigar da adadin kuɗin da kake son ƙarawa:"
    );

  if (
    amount === null ||
    amount.trim() === ""
  ) {
    return;
  }

  const value = Number(amount);

  if (
    isNaN(value) ||
    value <= 0
  ) {
    alert(
      "Da fatan zaɓi adadi mai inganci."
    );
    return;
  }

  const newBalance =
    getBalance() + value;

  saveBalance(newBalance);
  updateBalance();

  alert(
    "An ƙara ₦" +
    value.toFixed(2) +
    " cikin Wallet ɗinka ✅"
  );
}

function goBack() {
  window.location.href =
    "dashboard.html";
}

window.onload = function () {
  updateBalance();
  loadPaymentHistory();
};
function loadPaymentHistory() {
  const history =
    JSON.parse(
      localStorage.getItem("ymaPayments")
    ) || [];

  const historyBox =
    document.getElementById(
      "paymentHistory"
    );

  if (!historyBox) {
    return;
  }

  if (history.length === 0) {
    historyBox.innerHTML = `
      <div class="history-icon">📋</div>

      <div>
        <strong>No Payment History</strong>
        <p>Your payments will appear here.</p>
      </div>
    `;

    return;
  }

  historyBox.innerHTML =
    history
      .slice()
      .reverse()
      .map(function (payment) {
        return `
          <div class="payment-item">
            <strong>${payment.plan}</strong>
            <p>₦${payment.amount}</p>
            <small>${payment.date}</small>
          </div>
        `;
      })
      .join("");
}
