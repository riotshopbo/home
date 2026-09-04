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