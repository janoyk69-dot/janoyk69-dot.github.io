# 🔥 Configuración de Firebase para la Invitación

## Paso 1: Crear proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Agregar proyecto" o "Add project"
3. Ponle un nombre (ej: "cumple23-invitacion")
4. Desactiva Google Analytics (no es necesario)
5. Clic en "Crear proyecto"

## Paso 2: Crear Realtime Database

1. En el menú lateral, busca "Realtime Database"
2. Clic en "Crear base de datos"
3. Selecciona la ubicación más cercana (ej: `us-central1`)
4. **MUY IMPORTANTE**: Selecciona **"Comenzar en modo de prueba"** o "Start in test mode"
5. Clic en "Habilitar"

## Paso 3: Configurar reglas de seguridad

En la pestaña "Reglas" de Realtime Database, reemplaza con esto:

```json
{
  "rules": {
    "guests": {
      ".read": true,
      ".write": true
    }
  }
}
```

**Clic en "Publicar"**

> ⚠️ **Nota**: Estas reglas son públicas. Para producción deberías agregar autenticación, pero para este proyecto está bien.

## Paso 4: Obtener configuración

1. Ve al ícono de ⚙️ (configuración) > "Configuración del proyecto"
2. Baja hasta "Tus apps" y selecciona **Web** (ícono `</>`)
3. Registra tu app (ponle un nombre, ej: "invitacion-web")
4. **NO** necesitas Firebase Hosting, solo copia el objeto `firebaseConfig`

Verás algo como:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "tu-proyecto.firebaseapp.com",
  databaseURL: "https://tu-proyecto-default-rtdb.firebaseio.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxx"
};
```

## Paso 5: Pegar configuración en tu código

Abre el archivo: `assets/js/guest_manager.js`

Reemplaza estas líneas (11-18) con tus datos:

```javascript
const firebaseConfig = {
    apiKey: "TU-API-KEY-AQUI",              // <- Pega aquí
    authDomain: "TU-PROJECT-ID.firebaseapp.com",
    databaseURL: "https://TU-PROJECT-ID-default-rtdb.firebaseio.com",  // <- ¡Importante!
    projectId: "TU-PROJECT-ID",
    storageBucket: "TU-PROJECT-ID.appspot.com",
    messagingSenderId: "TU-MESSAGING-SENDER-ID",
    appId: "TU-APP-ID"
};
```

## Paso 6: Subir a GitHub

```bash
git add .
git commit -m "Integrar Firebase para guardar invitados"
git push origin main
```

## ✅ Verificar que funciona

1. Abre tu página en GitHub Pages
2. Registra una prueba de invitado
3. Ve a Firebase Console > Realtime Database
4. Deberías ver los datos aparecer en tiempo real bajo `guests/`

---

## 🛠️ Comandos Git útiles

```bash
# Ver el estado
git status

# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Mensaje descriptivo"

# Subir a GitHub
git push origin main
```

## 📊 Ver los invitados registrados

Puedes ver todos los invitados en:
- Firebase Console > Realtime Database
- O en tu página: `invitados.html` (contraseña: 1122)

---

## 🔒 Seguridad (Opcional - Para después del evento)

Después del 30 de enero, puedes cerrar las escrituras editando las reglas:

```json
{
  "rules": {
    "guests": {
      ".read": true,
      ".write": false
    }
  }
}
```

Esto permite que sigas viendo la lista pero nadie puede agregar más invitados.
