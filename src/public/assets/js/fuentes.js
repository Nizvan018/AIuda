function cambiarColor(id, color) {
    let fuente = document.getElementById(id);
    fuente.classList.add(color);
	setTimeout(() => {
		fuente.classList.remove(color)
		fuente.classList.add('color-blanco')
	}, 5000);
}