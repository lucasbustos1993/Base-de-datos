// Agregar evento para cada botón de "Mostrar letra"
const buttons = document.querySelectorAll('.show-lyrics-btn');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const lyricsContainer = button.nextElementSibling;  // El contenedor de letras está justo después del botón
        const isVisible = lyricsContainer.style.display === 'block';

        // Alternar la visibilidad de la letra
        lyricsContainer.style.display = isVisible ? 'none' : 'block';
    });
});