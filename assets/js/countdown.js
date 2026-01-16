// ===============================
// COUNTDOWN – 30 ENERO 2026 19:00
// ===============================
(function() {
  function init() {
    console.log("🚀 Countdown script initialized");

    // Fecha objetivo: 30 de Enero, 2026 a las 19:00 (7 PM)
    const TARGET_DATE = new Date(2026, 0, 30, 19, 0, 0);

    const daysEl  = document.getElementById("cd-days");
    const hoursEl = document.getElementById("cd-hours");
    const minsEl  = document.getElementById("cd-mins");
    const secsEl  = document.getElementById("cd-sec");

    if (!daysEl || !hoursEl || !minsEl) {
      console.warn("⚠️ Countdown elements not found in the DOM");
      return;
    }

    function updateCountdown() {
      const now = new Date();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        daysEl.textContent  = "00";
        hoursEl.textContent = "00";
        minsEl.textContent  = "00";
        if (secsEl) secsEl.textContent = "00";
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days  = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const mins  = Math.floor((totalSeconds % 3600) / 60);
      const secs  = totalSeconds % 60;

      daysEl.textContent  = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minsEl.textContent  = String(mins).padStart(2, "0");
      if (secsEl) secsEl.textContent = String(secs).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
