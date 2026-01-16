// ===============================
// COUNTDOWN – 30 ENERO 2026 19:00
// ===============================
document.addEventListener("DOMContentLoaded", () => {

  const TARGET_DATE = new Date(2026, 0, 30, 19, 0, 0); // Enero = 0

  const daysEl  = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl  = document.getElementById("cd-mins");

  // Seguridad: si no existen, aborta//
  if (!daysEl || !hoursEl || !minsEl) {
    console.error("⛔ Countdown elements not found");
    return;
  }

  function updateCountdown() {
    const now = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      daysEl.textContent  = "00";
      hoursEl.textContent = "00";
      minsEl.textContent  = "00";
      return;
    }

    const totalMinutes = Math.floor(diff / 1000 / 60);
    const days  = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const mins  = totalMinutes % 60;

    daysEl.textContent  = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent  = String(mins).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 60 * 1000);
});
