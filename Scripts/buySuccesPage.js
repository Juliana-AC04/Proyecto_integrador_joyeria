document.addEventListener("DOMContentLoaded", function () {
  // Obtener los datos del localStorage
  const datosPagoJSON = localStorage.getItem("datosPago");
  if (datosPagoJSON) {
    const datosPago = JSON.parse(datosPagoJSON);

    // Obtener la fecha actual
    const fechaActual = new Date().toLocaleDateString();

    // Mostrar los datos generales en la página
    document.querySelector(".dateContainer").innerText = fechaActual;
    document.querySelector(".JohnMiller").innerText = datosPago.nombreCompleto;
    document.querySelector(".visa").innerText = "Tarjeta";

    // Realizar la solicitud a la URL de las órdenes de compras
    fetch('https://minibackend-darling-dev-mzdq.2.us-1.fl0.io/ordenescompras')
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          // Obtener la última orden de compra del arreglo
          const ultimaOrden = data[data.length - 1];
          
          // Actualizar la información en la página
          document.querySelector(".orderInfo").innerText = `Order Number: ${ultimaOrden.id}`;
          document.querySelector(".orderDate").innerText = `Date: ${ultimaOrden.fecha}`;
          document.querySelector(".numbers").innerText = ultimaOrden.id; // Asumiendo que este es el lugar correcto para mostrar el número de orden
          document.querySelector(".price").innerText = `$${ultimaOrden.total}`; // Asumiendo que la orden tiene una propiedad "total"
          
          // Actualizar la información de la orden de compra en la sección "Order Line"
          const orderLineContainer = document.querySelector(".orderLuxuryImg");
          orderLineContainer.innerHTML = `
            <img src="../assets/buySuccessPage/${ultimaOrden.productImage}" class="luxury" alt="${ultimaOrden.productName}">
            <div class="luxuryOrderDiv">
              <figcaption class="LuxuryOrder">${ultimaOrden.productName}</figcaption>
              <p class="code">Code: ${ultimaOrden.productCode}</p>
              <div class="square">x${ultimaOrden.quantity}</div>
              <p class="priceOrder">$${ultimaOrden.productPrice}</p>
            </div>
          `;
          
        } else {
          console.error('No hay órdenes de compra disponibles.');
        }
      })
      .catch(error => console.error('Error al obtener las órdenes de compra:', error));
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
