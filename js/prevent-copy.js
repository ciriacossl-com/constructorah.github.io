// Deshabilitar el menú contextual en todas las imágenes con la clase "protegida"
const imagenesProtegidas = document.querySelectorAll(".protegida");

imagenesProtegidas.forEach(function(imagen) {
  imagen.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
});

// Deshabilitar la funcionalidad de arrastrar y soltar para todas las imágenes con la clase "protegida"
document.addEventListener("dragstart", function(event) {
  const elementoArrastrado = event.target;
  if (elementoArrastrado.classList.contains("protegida")) {
    event.preventDefault();
  }
});
