// guest_manager_sheets.js
// URL de tu Web App de Google Apps Script
const SHEETS_URL = "https://script.google.com/macros/s/AKfycbxOeLiBMZWsfWlaE-60yt2sUu4dCn5F3cRWXnZ0c6fbrtPYXMlFSHT-USFDXxoI5GP04A/exec";

/**
 * Guarda invitado en Google Sheets
 */
function saveGuestSheets(nombre, estado) {
    fetch(SHEETS_URL, {
        method: "POST",
        body: JSON.stringify({
            nombre: nombre,
            estado: estado
        })
    })
        .then(() => {
            console.log("✔ Invitado guardado");
        })
        .catch(err => {
            console.error("❌ Error:", err);
        });
}

/**
 * Obtiene invitados de Google Sheets (requiere doGet en el script)
 */
function getGuests(callback) {
    fetch(SHEETS_URL)
        .then(res => res.json())
        .then(data => {
            if (callback) callback(data.guests || []);
        })
        .catch(err => {
            console.error("❌ Error al leer:", err);
            if (callback) callback([]);
        });
}
