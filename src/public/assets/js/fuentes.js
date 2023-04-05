function cambiarColor(id, color) {
    let fuente = document.getElementById(id);
    fuente.classList.add(color);
    fuente.classList.add('fondo-gris-oscuro')
    setTimeout(() => {
        fuente.classList.remove(color)
        fuente.classList.remove('fondo-gris-oscuro')
        fuente.classList.add('color-blanco')
    }, 5000);
}