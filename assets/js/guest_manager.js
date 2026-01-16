// Sistema de gestión de invitados con Firebase
// INSTRUCCIONES: Reemplaza firebaseConfig con tu configuración de Firebase
// Ve a: https://console.firebase.google.com/
// 1. Crea un proyecto nuevo
// 2. Ve a "Realtime Database" y créala (modo prueba)
// 3. Ve a "Configuración del proyecto" > "Tus apps" > "Web" y copia la configuración


const firebaseConfig = {
    apiKey: "AIzaSyAm3ul9rSf_PikZJptWeH4HraMr9DUiia0",
    authDomain: "micumpleanho.firebaseapp.com",
    databaseURL: "https://micumpleanho-default-rtdb.firebaseio.com",
    projectId: "micumpleanho",
    storageBucket: "micumpleanho.appspot.com",
    messagingSenderId: "34335404871",
    appId: "1:34335404871:web:a7ef065e1409a7a7719262",
    measurementId: "G-XZW14HMZLL"
};

// Inicializar Firebase (solo si no está inicializado)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

function saveGuest(name, status) {
    const newGuest = {
        name: name,
        status: status,
        time: new Date().toLocaleString('es-ES', { 
            dateStyle: 'short', 
            timeStyle: 'short' 
        })
    };
    
    // Guardar en Firebase
    const guestsRef = database.ref('guests');
    guestsRef.push(newGuest);
    
    return newGuest;
}

function getGuests(callback) {
    const guestsRef = database.ref('guests');
    
    guestsRef.once('value', (snapshot) => {
        const data = snapshot.val();
        const guestsList = [];
        
        if (data) {
            Object.keys(data).forEach(key => {
                guestsList.push(data[key]);
            });
        }
        
        if (callback) callback(guestsList);
    });
}

function clearGuests() {
    const guestsRef = database.ref('guests');
    guestsRef.remove();
}