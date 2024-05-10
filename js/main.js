function mostrarInformacion(numero) {
  var contenido = document.getElementById('contenido' + numero);
  if (contenido.classList.contains('oculto')) {
    // Ocultar todos los contenidos
    var todosContenidos = document.querySelectorAll('.contenido');
    todosContenidos.forEach(function(elemento) {
      elemento.classList.add('oculto');
      elemento.classList.remove('visible');
    });
    // Mostrar el contenido correspondiente
    contenido.classList.remove('oculto');
    contenido.classList.add('visible');
  } else {
    // Si ya está visible, ocultarlo
    contenido.classList.add('oculto');
    contenido.classList.remove('visible');
  }
}