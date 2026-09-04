//Inicio
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


-------
    

// --- SELECCIÓN DE BOTONES DE NAVEGACIÓN PRINCIPAL ---
const btnExplorar = document.getElementById('btn-explorar');
const btnAbout = document.getElementById('btn-about');
const btnLista = document.getElementById('btn-lista');
const btnInicio = document.getElementById('btn-inicio');

// Eventos de clic para los botones principales
btnExplorar.addEventListener('click', () => {
    alert('Hiciste clic en el botón: Explorar');
});

btnAbout.addEventListener('click', () => {
    alert('Hiciste clic en el botón: Acerca de');
});

btnLista.addEventListener('click', () => {
    alert('Hiciste clic en el botón: Lista de Productos');
});

btnInicio.addEventListener('click', () => {
    alert('Hiciste clic en el botón: Inicio');
});


// --- CARRUSEL DE PRODUCTOS (CÓDIGO UNIFICADO Y CORREGIDO) ---
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Función para detectar cuál es la tarjeta central y aplicarle la clase
    const updateFocusCard = () => {
        const cards = track.querySelectorAll('.product-card');
        
        cards.forEach((card, index) => {
            card.classList.remove('in-focus');
            
            // Si la tarjeta es la segunda (índice 1), le ponemos el foco
            if (index === 1) {
                card.classList.add('in-focus');
            }
        });
    };

    // Inicializar el foco al cargar la página
    if (track) {
        updateFocusCard();

        // Botón Siguiente (Mueve la primera tarjeta al final y actualiza el loop/foco)
        nextBtn.addEventListener('click', () => {
            const cards = track.querySelectorAll('.product-card');
            if (cards.length > 0) {
                track.appendChild(cards[0]); 
                updateFocusCard();
            }
        });

        // Botón Anterior (Mueve la última tarjeta al inicio y actualiza el loop/foco)
        prevBtn.addEventListener('click', () => {
            const cards = track.querySelectorAll('.product-card');
            if (cards.length > 0) {
                track.insertBefore(cards[cards.length - 1], cards[0]); 
                updateFocusCard();
            }
        });
    }
});
