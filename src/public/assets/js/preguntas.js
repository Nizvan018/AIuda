function evaluar(event, color){
    let $respuesta = event.target;
    let $mensaje = $respuesta.parentElement.getElementsByClassName('mensaje')[0];
    let $respuestas = Array.from($respuesta.parentElement.getElementsByClassName('respuesta'));

    $respuesta.classList.add(color);
    $respuesta.style.border = 'none';

    if(color === 'fondo-verde'){
        $mensaje.innerHTML = '¡La respuesta es correcta, bien hecho!';
        $mensaje.classList.add('color-verde');
        $mensaje.classList.remove('color-rojo');
        
        $respuestas.map(res => res.removeAttribute('onclick'));
    } else{
        $mensaje.innerHTML = 'Respuesta incorrecta :C, ¡inténtalo de nuevo!';
        $mensaje.classList.add('color-rojo');
        $mensaje.classList.remove('color-verde');
    }
}