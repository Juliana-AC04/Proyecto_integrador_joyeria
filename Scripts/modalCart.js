const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal");

const toggleModal = (button, modal) => {
    button.addEventListener("click", () =>{
        modal.classList.toggle("hidden");
        modal.classList.toggle("show");
    })
}

toggleModal(cartButton, modal)
toggleModal(closeButton, modal)


//Pintar los productos
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

cartItems = cartItems.filter(item => item.cantidad > 0);

const carrito = document.getElementById("cartBody");

carrito.innerHTML = '';

cartItems.forEach(item => {
    // Crear un nuevo elemento div para cada elemento del carrito
    const itemCarrito = document.createElement('div');
    itemCarrito.classList.add('carrito-item');

    // Verificar si la talla es null
    const tallaHTML = item.talla ? <p class="itemTalla">Talla:${item.talla}</p> : '';

    // Agregar el contenido del elemento del carrito
    itemCarrito.innerHTML = `
        <div class="productos" data-item-id="${item.id}">
          <div class="cartProductImg">
            <img src="${item.imagenes}">
          </div>
          <div class="infoProducto">
            <h3 class="itemNombre">${item.nombre}</h3>
            <p class="itemCodigo">Código:${item.codigo}</p>
            <p class="itemPrecio">$${item.precioTotal.toFixed(2)}</p>
            ${tallaHTML}
          </div>
          <div class="editProducto">
            <button class="cantidadCartBtn" id="menosProduct"><i class="fa-solid fa-minus fa-sm" style="    color: #b37d10;"></i></button>
            <div  class="cantidadCart" id="cantidadProducto">${item.cantidad}</div>
            <button class="cantidadCartBtn" id="masProduct"><i class="fa-solid fa-plus fa-sm" style="color: #b37d10;"></i></button>
          </div>
          </div>
          <hr class="cartDivisor">
    `;

    // Agregar el elemento del carrito al contenedor del carrito
    carrito.appendChild(itemCarrito);
});

// Obtener el total actual del carrito
let total = 0;
cartItems.forEach(item => {
    total += item.precioTotal;
});

// Crear el HTML del footer del carrito
const footerHTML = `
  <div class="cartFooter">
    <div class="sectionPrice">
      <p class="cartTotal">Total</p>
      <p class="cartPrice">$${total.toFixed(2)}</p>
    </div>
    <button class="cartButton"><a href="#">Continue to checkout</a></button>
  </div>
`;

// Agregar el HTML del footer del carrito al modal
modal.querySelector('section').innerHTML += footerHTML;

// Agregar un controlador de eventos a los botones de cantidad
const cantidadCartButtons = document.querySelectorAll(".cantidadCartBtn");

cantidadCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const itemId = button.parentElement.parentElement.dataset.itemId;
        const index = cartItems.findIndex(item => item.id === itemId);
        if (index !== -1) {
            if (button.id === "masProduct") {
                cartItems[index].cantidad++;
            } else if (button.id === "menosProduct" && cartItems[index].cantidad > 0) {
                cartItems[index].cantidad--;

                // Verificar si la cantidad llegó a cero y recargar la página si es así
                if (cartItems[index].cantidad === 0) {
                    cartItems.splice(index, 1);
                    localStorage.setItem("cartItems", JSON.stringify(cartItems));
                    // location.reload();
                }
            }
            // Actualizar el precio total del elemento
            cartItems[index].precioTotal = cartItems[index].cantidad * cartItems[index].precioUnitario;

            // Guardar los cambios en el localStorage
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            // Actualizar el precio total en el footer del carrito
            let total = 0;
            cartItems.forEach(item => {
                total += item.precioTotal;
            });
            const cartPrice = document.querySelector(".cartPrice");
            cartPrice.textContent = $$;{total.toFixed(2)};

            // Actualizar el precio del producto en la interfaz
            const precioProductoElement = button.parentElement.previousElementSibling.querySelector(".itemPrecio");
            precioProductoElement.textContent = $$;{cartItems[index].precioTotal.toFixed(2)};

            // Actualizar la cantidad mostrada en el carrito
            const cantidadElement = button.parentElement.querySelector(".cantidadCart");
            cantidadElement.textContent = cartItems[index].cantidad;
        }
    });
});