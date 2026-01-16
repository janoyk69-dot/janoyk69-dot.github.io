// guest_manager_sheets.js
// Reemplaza la URL con la de tu Web App de Google Apps Script
const SHEETS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwpNoNoVw09OJYlOmqP8nPwkaTlC0UYyky9oUFUVaz7nWT6_P8U17X3qNeEXfaJxhFk/exec";

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
