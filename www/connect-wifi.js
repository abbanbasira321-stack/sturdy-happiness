let connected = false;

function connectWifi() {
  const statusText =
    document.getElementById("statusText");

  const connectButton =
    document.getElementById("connectButton");

  const timeRemaining =
    document.getElementById("timeRemaining");

  const dataUsage =
    document.getElementById("dataUsage");

  if (!connected) {

    connected = true;

    statusText.textContent = "Connected";

    connectButton.textContent = "DISCONNECT";

    timeRemaining.textContent = "24 Hours";

    dataUsage.textContent = "0 MB";

    alert("An haɗa ka da YMA Wi-Fi ✅");

  } else {

    connected = false;

    statusText.textContent = "Disconnected";

    connectButton.textContent = "CONNECT";

    timeRemaining.textContent = "Not Connected";

    dataUsage.textContent = "0 MB";

    alert("An cire haɗin YMA Wi-Fi");

  }
}

function goBack() {
  window.location.href = "dashboard.html";
}
