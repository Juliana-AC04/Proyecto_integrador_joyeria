const cartButton = document.getElementById("btnCart");
const modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal");

// Función para mostrar y ocultar el modal del carrito
const toggleModal = (button, modal) => {
  button.addEventListener("click", () => {
    modal.classList.toggle("hidden");
    modal.classList.toggle("show");
  });
};

// Verifica si los elementos existen antes de agregar eventos
if (cartButton && modal && closeButton) {
  toggleModal(cartButton, modal);
  toggleModal(closeButton, modal);
}
