// Carrito de compras
const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal");
const buyNowButton = document.querySelector(".buttonBuy a");

// Variables para mantener el estado del carrito
let selectedSize = null;
let selectedQuantity = 1;

// Función para agregar el producto al carrito
const addToCart = () => {
  // Verificar si se ha seleccionado una talla
  if (selectedSize !== null) {
    // Obtener la información del producto
    const productInfo = {
      id: selectedProduct.id,
      nombre: selectedProduct.nombre,
      talla: selectedSize,
      cantidad: selectedQuantity,
      precio: selectedProduct.precio,
    };

    // Puedes almacenar el producto en el carrito usando localStorage o tu método preferido
    // Ejemplo con localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(productInfo);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Ocultar el modal después de agregar al carrito
    modal.classList.add("hidden");
    modal.classList.remove("show");

    // Reiniciar variables de selección
    selectedSize = null;
    selectedQuantity = 1;
  } else {
    // Mostrar un mensaje de error o realizar alguna acción si no se selecciona talla
    console.log("Por favor, selecciona una talla.");
  }
};

// Evento de clic en "Add to bag"
cartButton.addEventListener("click", () => {
  addToCart();
});

// Evento de clic en "Buy now"
buyNowButton.addEventListener("click", () => {
  // Puedes redirigir al usuario a la página de pago aquí
  window.location.href = "./payment.html";
});

// Función para manejar la selección de talla
const handleSizeSelection = (size) => {
  selectedSize = size;
};

// Obtener elementos de tallas
const sizeSquares = document.querySelectorAll(".square");

// Agregar evento de clic a cada cuadro de talla
sizeSquares.forEach((square) => {
  square.addEventListener("click", () => {
    // Reiniciar estilos de todos los cuadros de talla
    sizeSquares.forEach((s) => s.classList.remove("selected"));

    // Marcar la talla seleccionada
    square.classList.add("selected");

    // Manejar la selección de talla
    handleSizeSelection(square.textContent);
  });
});

// Funciones para manejar incremento y decremento de la cantidad
const incrementQuantity = () => {
  selectedQuantity += 1;
  updateQuantityDisplay();
};

const decrementQuantity = () => {
  if (selectedQuantity > 1) {
    selectedQuantity -= 1;
    updateQuantityDisplay();
  }
};

// Obtener elementos de incremento y decremento
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// Agregar eventos de clic a los botones de incremento y decremento
incrementButton.addEventListener("click", incrementQuantity);
decrementButton.addEventListener("click", decrementQuantity);

// Función para actualizar la visualización de la cantidad
const updateQuantityDisplay = () => {
  const quantityElement = document.getElementById("quantity");
  quantityElement.textContent = selectedQuantity;
};

// Evento de clic en el botón de cerrar modal
closeButton.addEventListener("click", () => {
  // Reiniciar variables de selección al cerrar el modal
  selectedSize = null;
  selectedQuantity = 1;
  updateQuantityDisplay();
});

// Función para mostrar el modal
const showModal = () => {
  modal.classList.remove("hidden");
  modal.classList.add("show");
};

// Función para ocultar el modal
const hideModal = () => {
  modal.classList.add("hidden");
  modal.classList.remove("show");
};


