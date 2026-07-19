let balance =
  Number(
    localStorage.getItem("ymaBalance")
  ) || 0;

function updateBalance() {
  document.getElementById(
    "balance"
  ).textContent =
    "₦" + balance.toFixed(2);
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

  const value =
    Number(amount);

  if (
    isNaN(value) ||
    value <= 0
  ) {
    alert(
      "Da fatan zaɓi adadi mai inganci."
    );

    return;
  }

  balance += value;

  localStorage.setItem(
    "ymaBalance",
    balance
  );

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

window.onload =
  updateBalance;
