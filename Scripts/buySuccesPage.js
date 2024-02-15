document.addEventListener("DOMContentLoaded", function() {

  const URL_BASE = "https://minibackend-darling-dev-mzdq.2.us-1.fl0.io/";
  // Realizar una solicitud para obtener los datos de la última compra
  fetch(`${URL_BASE}ordenescompras`)
      .then(response => response.json())
      .then(data => {
          // Obtener la última compra
          const ultimaCompra = data[data.length - 1];

          // Obtener los artículos de la compra
          const cartItems = ultimaCompra.cartItems;

          const fechaCompra = ultimaCompra.fecha;
          const nombreCompleto = ultimaCompra.datosPago.nombreCompleto;
          const numeroOrder = ultimaCompra.numeroOrden
          const precio= ultimaCompra.cartItems;

          // Calcular el precio total
          let precioTotal = 0;
          cartItems.forEach(item => {
              precioTotal += item.precioTotal;
          });

          // Mostrar los datos en la página
          document.querySelector(".dateContainer").innerText = fechaCompra;
          document.querySelector(".JohnMiller").innerText = nombreCompleto;
          document.querySelector(".numbers").innerText = numeroOrder;

            // Mostrar el precio total en la página
          document.querySelector(".price").innerText = "$" + precioTotal.toFixed(2);

          // Obtener el contenedor donde se mostrarán los productos
          const orderContainer = document.querySelector('.order');

          // Construir el HTML para los productos
          let productosHTML = '';

          // Iterar sobre los artículos de la compra y construir el HTML para cada uno
          cartItems.forEach(item => {
              productosHTML += `
                  <div class="luxuryItems">
                  <figure class="orderLuxuryImg">
                      <img src="${item.imagenes[0]}" class="luxury" alt="${item.nombre}">
                      <div class="luxuryOrderDiv">
                          <figcaption class="LuxuryOrder">${item.nombre}</figcaption>
                          <p class="code">Code: ${item.codigo}</p>
                          <div class="square">x${item.cantidad}</div>
                          <p class="priceOrder">$${item.precioTotal}</p>
                      </div>
                  </figure>
                  <div>
              `;
          });

          // Agregar el HTML al contenedor
          orderContainer.innerHTML = productosHTML;
      })
      .catch(error => {
          console.error('Error al obtener los datos de la última compra:', error);
      });

  // Obtener el botón "Continue shopping"
  const continueShoppingButton = document.querySelector(".continue");

  // Agregar un event listener al botón
  continueShoppingButton.addEventListener("click", function(event) {
      // Evitar el comportamiento predeterminado del enlace
      event.preventDefault();

      localStorage.removeItem("idProduct");

      // Redirigir a index.html
      window.location.href = "../index.html";
  });

 
});