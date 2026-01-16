// guest_manager_sheets.js
// Reemplaza la URL con la de tu Web App de Google Apps Script
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbzr_j0k85BmCyMqLS5Wu7MGEnkgdvhH_apkiyo63PwhkUC1v_OkInv25yZURd4zBusn/exec";

function saveGuestSheets(name, status) {
    fetch(SHEETS_WEBAPP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre: name, estado: status })
    })
    .then(res => res.text())
    .then(txt => {
        console.log("Respuesta Google Sheets:", txt);
        alert("¡Registro enviado!");
    })
    .catch(err => {
        console.error("Error Google Sheets:", err);
        alert("Error al registrar. Intenta de nuevo.");
    });
}
