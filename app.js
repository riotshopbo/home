// Importa las funciones necesarias de los SDKs de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 1. Pega aquí los datos que te dio Firebase en el Paso 1
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referencia al formulario y a la lista en el HTML
const form = document.getElementById("userForm");
const dataList = document.getElementById("dataList");

// Función para guardar datos al enviar el formulario
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombreVal = document.getElementById("nombre").value;

    try {
        // Guardamos en una colección llamada "usuarios" (similar a una tabla SQL)
        await addDoc(collection(db, "usuarios"), {
            nombre: nombreVal,
            fecha: new Date()
        });
        alert("¡Guardado con éxito!");
        form.reset();
        cargarDatos(); // Recargar la lista
    } catch (error) {
        console.error("Error al guardar: ", error);
    }
});

// Función para leer los datos de Firebase y mostrarlos
async function cargarDatos() {
    dataList.innerHTML = "";
    const querySnapshot = await getDocs(collection(db, "usuarios"));
    querySnapshot.forEach((doc) => {
        const li = document.createElement("li");
        li.textContent = doc.data().nombre;
        dataList.appendChild(li);
    });
}

// Cargar los datos al abrir la página
cargarDatos();
