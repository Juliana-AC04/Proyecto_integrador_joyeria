document.addEventListener("DOMContentLoaded", function () {
  // Obtener los datos del localStorage
  const datosPagoJSON = localStorage.getItem("datosPago");
  if (datosPagoJSON) {
    const datosPago = JSON.parse(datosPagoJSON);

    // Obtener la fecha actual
    const fechaActual = new Date().toLocaleDateString();

    // Mostrar los datos en la página
    document.querySelector(".dateContainer").innerText = fechaActual;
    document.querySelector(".JohnMiller").innerText = datosPago.nombreCompleto;
    document.querySelector(".visa").innerText = "Tarjeta";
  }

  // Obtener el botón "Continue shopping"
  const continueShoppingButton = document.querySelector(".continue");

  // Agregar un event listener al botón
  continueShoppingButton.addEventListener("click", function (event) {
    // Evitar el comportamiento predeterminado del enlace
    event.preventDefault();

    // Borrar los datos del localStorage
    localStorage.removeItem("datosPago");

    // Redirigir a index.html
    window.location.href = "../index.html";
  });
});
