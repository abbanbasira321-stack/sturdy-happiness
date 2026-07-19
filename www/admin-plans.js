const isAdmin =
  localStorage.getItem("ymaAdmin");

if (isAdmin !== "true") {
  window.location.href =
    "admin-login.html";
}

let plans =
  JSON.parse(
    localStorage.getItem("ymaPlans")
  ) || [
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

function savePlans() {
  localStorage.setItem(
    "ymaPlans",
    JSON.stringify(plans)
  );
}

function addPlan() {
  const name =
    document.getElementById("planName").value.trim();

  const price =
    Number(
      document.getElementById("planPrice").value
    );

  const duration =
    document.getElementById("planDuration").value.trim();

  if (
    name === "" ||
    price <= 0 ||
    duration === ""
  ) {
    alert("Cika dukkan bayanai");
    return;
  }

  plans.push({
    name: name,
    price: price,
    duration: duration
  });

  savePlans();

  document.getElementById("planName").value = "";
  document.getElementById("planPrice").value = "";
  document.getElementById("planDuration").value = "";

  loadPlans();

  alert("An ƙara sabon plan ✅");
}

function deletePlan(index) {
  if (
    confirm("Kana son goge wannan plan?")
  ) {
    plans.splice(index, 1);

    savePlans();

    loadPlans();
  }
}

function loadPlans() {
  const plansList =
    document.getElementById("plansList");

  plansList.innerHTML = "";

  plans.forEach(
    function (plan, index) {

      plansList.innerHTML += `
        <div class="admin-card">

          <h2>${plan.name}</h2>

          <p>⏱️ ${plan.duration}</p>

          <h3>₦${plan.price}</h3>

          <button
            onclick="deletePlan(${index})"
          >
            🗑️ DELETE
          </button>

        </div>
      `;
    }
  );
}

function goAdmin() {
  window.location.href =
    "admin.html";
}

window.onload =
  loadPlans;
