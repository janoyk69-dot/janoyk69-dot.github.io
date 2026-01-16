// ================================
// Sistema de gestión de invitados
// Firebase Realtime Database
// ================================

// Configuración Firebase
// (Esta config ES PÚBLICA, no es secreta)
const firebaseConfig = {
    apiKey: "AIzaSyAm3ul9rSf_PikZJptWeH4HraMr9DUiia0",
    authDomain: "micumpleanho.firebaseapp.com",
    databaseURL: "https://micumpleanho-default-rtdb.firebaseio.com",
    projectId: "micumpleanho",
    storageBucket: "micumpleanho.appspot.com",
    messagingSenderId: "34335404871",
    appId: "1:34335404871:web:a7ef065e1409a7a7719262"
};

// Inicializar Firebase (evita doble init)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Referencia a la base de datos
const database = firebase.database();

/**
 * Guarda la respuesta del invitado
 * @param {string} name
 * @param {string} status  ASISTIRÉ | NO_ASISTIRÉ
 */
function saveGuest(name, status) {
    const guestData = {
        nombre: name,
        estado: status,
        fecha: new Date().toISOString(),
        source: "github_pages"
    };

    // Nodo alineado con las reglas y la invitación
    const guestsRef = database.ref("confirmaciones");

    guestsRef.push(guestData)
        .then(() => {
            console.log("✔ Invitado registrado:", guestData);
        })
        .catch((error) => {
            console.error("❌ Error guardando invitado:", error);
            alert("Error al registrar la asistencia. Intenta nuevamente.");
        });

    return guestData;
}

/**
 * Obtener invitados (solo para uso privado / admin)
 * ⚠️ Requiere reglas .read = true
 */
function getGuests(callback) {
    const guestsRef = database.ref("confirmaciones");

    guestsRef.once("value", (snapshot) => {
        const data = snapshot.val();
        const list = [];

        if (data) {
            Object.keys(data).forEach((key) => {
                list.push({
                    id: key,
                    ...data[key]
                });
            });
        }

        if (callback) callback(list);
    });
}

/**
 * Borra todos los invitados
 * ⚠️ SOLO para admin / pruebas
 */
function clearGuests() {
    const guestsRef = database.ref("confirmaciones");
    guestsRef.remove();
}
