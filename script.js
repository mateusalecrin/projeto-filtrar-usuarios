document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    const usuarios = document.querySelectorAll('.card');

    buscador.addEventListener('input', function() {
        const texto = buscador.value.trim().toLowerCase();

        usuarios.forEach(function(usuario) {
            const nome = usuario.querySelector('.card-title').textContent.toLowerCase();
            const cidade = usuario.querySelector('.card-text').textContent.toLowerCase();
            
            if (nome.includes(texto) || cidade.includes(texto)) {
                usuario.parentElement.style.display = 'block'; // Mostra o card
            } else {
                usuario.parentElement.style.display = 'none'; // Oculta o card
            }
        });
    });
});
