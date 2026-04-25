// Seleccionamos los elementos del DOM (HTML) que vamos a utilizar
const formulario = document.getElementById('contact-form');
const inputNombre = document.getElementById('nombre');
const mensajeInteractivo = document.getElementById('mensaje-interactivo');

// Escuchamos el evento 'submit' (cuando se hace clic en el botón Enviar)
formulario.addEventListener('submit', function(evento) {
    // Evitamos que la página se recargue, que es el comportamiento por defecto
    evento.preventDefault();

    // Capturamos el valor que el usuario escribió en el campo "Nombre"
    const nombreUsuario = inputNombre.value;

    // Modificamos el contenido del párrafo vacío de manera visible
    mensajeInteractivo.textContent = "¡Hola " + nombreUsuario + "! Tu mensaje ha sido simulado con éxito.";
    
    // Le damos un poco de estilo al mensaje desde JavaScript
    mensajeInteractivo.style.color = "#28a745"; // Color verde
    mensajeInteractivo.style.fontWeight = "bold";
    mensajeInteractivo.style.marginTop = "15px";

    // Opcional: Limpiamos los campos del formulario después de enviar
    formulario.reset();
});