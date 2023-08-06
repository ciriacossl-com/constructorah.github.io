document.addEventListener("DOMContentLoaded", function() {
  // Espera 2 segundos antes de activar el scroll automático
  setTimeout(function() {
    scrollAutomatico();
  }, 2000);
});

let scrollInterval; // Variable para almacenar el intervalo del scroll automático

function scrollAutomatico() {
  // Calcula la altura total de la página
  const alturaTotal = document.body.scrollHeight;
  
  // Define la velocidad del scroll (en pixeles por segundo)
  const velocidadScroll = 100; // Puedes ajustar este valor según tu preferencia
  
  // Inicia el scroll automático
  let posicionActual = 0;
  scrollInterval = setInterval(function() {
    if (posicionActual >= alturaTotal) {
      // Detener el scroll automático una vez que se haya llegado al final de la página
      clearInterval(scrollInterval);
    } else {
      // Realizar el scroll hacia abajo
      window.scrollBy(0, 1); // Puedes ajustar el valor "1" para controlar la velocidad de scroll
      posicionActual++;
    }
  }, 1000 / velocidadScroll);
}

// Agregar el event listener para detectar movimiento de mouse
document.addEventListener("mousemove", function() {
  // Detener el scroll automático si el intervalo está activo
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
});

// document.addEventListener("DOMContentLoaded", function() {
//     // Espera 2 segundos antes de activar el scroll automático
//     setTimeout(function() {
//       scrollAutomatico();
//     }, 5000);
//   });
  
//   function scrollAutomatico() {
//     // Calcula la altura total de la página
//     const alturaTotal = document.body.scrollHeight;
    
//     // Define la velocidad del scroll (en pixeles por segundo)
//     const velocidadScroll = 100; // Puedes ajustar este valor según tu preferencia
    
//     // Inicia el scroll automático
//     let posicionActual = 0;
//     const scrollInterval = setInterval(function() {
//       if (posicionActual >= alturaTotal) {
//         // Detener el scroll automático una vez que se haya llegado al final de la página
//         clearInterval(scrollInterval);
//       } else {
//         // Realizar el scroll hacia abajo
//         window.scrollBy(0, 1); // Puedes ajustar el valor "1" para controlar la velocidad de scroll
//         posicionActual++;
//       }
//     }, 1000 / velocidadScroll);
//   }