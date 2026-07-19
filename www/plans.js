let plans = [];

function loadPlans() {
  const savedPlans =
    localStorage.getItem("ymaPlans");

  if (savedPlans) {
    plans = JSON.parse(savedPlans);
  } else {
    plans = [
      {
        name: "Daily Plan",
        price: 100,
        duration: "24 Hours"
      },
      {
        name: "Weekly Plan",
        price: 500,
        duration: "7 Days"
      },
      {
        name: "Monthly Plan",
        price: 1500,
        duration: "30 Days"
      }
    ];
  }

  const plansPage =
    document.querySelector(".plans-page");

  const backButton =
    document.querySelector(".back-button");

  document.querySelectorAll(
    ".plan-card"
  ).forEach(function (card) {
    card.remove();
  });

  plans.forEach(function (plan) {

    const card =
      document.createElement("div");

    card.className = "plan-card";

    card.innerHTML = `
      <div class="plan-icon">📶</div>

      <h2>${plan.name}</h2>

      <p>${plan.duration} Unlimited Wi-Fi</p>

      <h3>₦${plan.price}</h3>

      <button
        onclick="buyPlan('${plan.name}', ${plan.price})"
      >
        BUY NOW
      </button>
    `;

    plansPage.insertBefore(
      card,
      backButton
    );
  });
}

function buyPlan(planName, price) {

  let balance =
    Number(
      localStorage.getItem("ymaBalance")
    ) || 0;

  if (balance < price) {

    alert(
      "Wallet ɗinka bai isa ba ❌\n\n" +
      "Balance: ₦" + balance + "\n" +
      "Price: ₦" + price
    );

    return;
  }

  balance -= price;

  localStorage.setItem(
    "ymaBalance",
    balance
  );

  localStorage.setItem(
    "ymaActivePlan",
    planName
  );const payment = {
  plan: planName,
  amount: price,
  phone: localStorage.getItem("ymaPhone") || "Unknown",
  date: new Date().toLocaleString()
};

let payments =
  JSON.parse(
    localStorage.getItem("ymaPayments")
  ) || [];

payments.push(payment);

localStorage.setItem(
  "ymaPayments",
  JSON.stringify(payments)
);

  alert(
    "An sayi " +
    planName +
    " successfully ✅"
  );

  window.location.href =
    "profile.html";
}

function goBack() {
  window.location.href =
    "dashboard.html";
}

window.onload =
  loadPlans;
