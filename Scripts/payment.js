document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("procesarPago");
    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe
  
      // Obtener los valores de los campos del formulario
      const nombreCompleto = document.getElementById("nombreCompleto").value;
      const telefono = document.getElementById("telefono").value;
      const direccion = document.getElementById("direccion").value;
      const correo = document.getElementById("correo").value;
      const nombreTarjeta = document.getElementById("nombreTarjeta").value;
      const numeroTarjeta = document.getElementById("numeroTarjeta").value;
      const tipoTarjeta = document.getElementById("tipoTtarjeta").value;
      const fechaCaducidad = document.getElementById("fechaCaducidad").value;
      const cvv = document.getElementById("cvv").value;
  
      // Crear un objeto con los datos del formulario
      const datosPago = {
        nombreCompleto: nombreCompleto,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
        nombreTarjeta: nombreTarjeta,
        numeroTarjeta: numeroTarjeta,
        tipoTarjeta: tipoTarjeta,
        fechaCaducidad: fechaCaducidad,
        cvv: cvv
      };
  
      // Convertir el objeto a cadena JSON y guardar en localStorage
      localStorage.setItem("datosPago", JSON.stringify(datosPago));

      console.log(localStorage.setItem("datosPago", JSON.stringify(datosPago))
      )
      // Redireccionar a la página de éxito
      location.href = "./buySuccessPage.html";
    });
  });
  