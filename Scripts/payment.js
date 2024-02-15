document.addEventListener("DOMContentLoaded", function () {
  const itemsContainer = document.querySelector(".orderSummary .items");
  const formulario = document.getElementById("procesarPago");
  const inputs = document.querySelectorAll("#procesarPago input");
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const expresiones = {
    nombreCompleto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    telefono: /^\d{7,10}$/,
    direccion: /^[A-Za-z0-9\s,#.'-]+$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nombreTarjeta: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    numeroTarjeta: /^\d{14,16}$/,
    fechaCaducidad: /^(20\d{2})-(0[1-9]|1[0-2])$/, 
    cvv: /^\d{3}$/,
  };

  const campos = {
    nombreCompleto: false,
    telefono: false,
    direccion: false,
    correo: false,
    nombreTarjeta:false,
    numeroTarjeta: false,
    fechaCaducidad: false,
    cvv: false,
  };

  const mostrarMensajeError = () => {
    document
      .getElementById("formularioMensaje")
      .classList.add("formularioMensaje-activo");
  };

  const ocultarMensajeError = () => {
    document
      .getElementById("formularioMensaje")
      .classList.remove("formularioMensaje-activo");
  };

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "nombreCompleto":
        validarCampo(expresiones.nombreCompleto, e.target, "nombreCompleto");
        break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target, "telefono");
        break;
      case "direccion":
        validarCampo(expresiones.direccion, e.target, "direccion");
        break;
      case "correo":
        validarCampo(expresiones.correo, e.target, "correo");
        break;
      case "nombreTarjeta":
        validarCampo(expresiones.nombreTarjeta, e.target, "nombreTarjeta");
        break;
      case "numeroTarjeta":
        validarCampo(expresiones.numeroTarjeta, e.target, "numeroTarjeta");
        break;
      case "fechaCaducidad":
        validarCampo(expresiones.fechaCaducidad, e.target, "fechaCaducidad");
        break;
      case "cvv":
        validarCampo(expresiones.cvv, e.target, "cvv");
        break;
    }
  };

  const validarCampo = (expresion, input, campo) => {
    const grupoCampo = document.getElementById(`grupo_${campo}`);
    const iconoEstadoCampo = grupoCampo.querySelector("i");
    const mensajeError = grupoCampo.querySelector(".formularioInputError");

    if (expresion.test(input.value)) {
      grupoCampo.classList.remove("formularioGrupoIncorrecto");
      grupoCampo.classList.add("formularioGrupoCorrecto");
      iconoEstadoCampo.classList.add("fa-check-circle");
      iconoEstadoCampo.classList.remove("fa-times-circle");
      mensajeError.classList.remove("formularioInputError-activo");
      campos[campo] = true;
    } else {
      grupoCampo.classList.add("formularioGrupoIncorrecto");
      grupoCampo.classList.remove("formularioGrupoCorrecto");
      iconoEstadoCampo.classList.add("fa-times-circle");
      iconoEstadoCampo.classList.remove("fa-check-circle");
      mensajeError.classList.add("formularioInputError-activo");
      campos[campo] = false;

      mostrarMensajeError();
    }

    // Validar longitud específica para algunos campos
    if (
      campo === "telefono" &&
      (input.value.length < 7 || input.value.length > 14)
    ) {
      grupoCampo.classList.add("formularioGrupoIncorrecto");
      grupoCampo.classList.remove("formularioGrupoCorrecto");
      iconoEstadoCampo.classList.add("fa-times-circle");
      iconoEstadoCampo.classList.remove("fa-check-circle");
      mensajeError.classList.add("formularioInputError-activo");
      campos[campo] = false;

      mostrarMensajeError();
    } else if (
      campo === "telefono" &&
      input.value.length >= 7 &&
      input.value.length <= 10
    ) {
      // Se añade esta condición para corregir la validación de longitud para el campo "telefono"
      grupoCampo.classList.remove("formularioGrupoIncorrecto");
      grupoCampo.classList.add("formularioGrupoCorrecto");
      iconoEstadoCampo.classList.add("fa-check-circle");
      iconoEstadoCampo.classList.remove("fa-times-circle");
      mensajeError.classList.remove("formularioInputError-activo");
      campos[campo] = true;
    }

    if (
      (campo === "numeroTarjeta" || campo === "cvv") &&
      input.value.length > 16
    ) {
      grupoCampo.classList.add("formularioGrupoIncorrecto");
      grupoCampo.classList.remove("formularioGrupoCorrecto");
      iconoEstadoCampo.classList.add("fa-times-circle");
      iconoEstadoCampo.classList.remove("fa-check-circle");
      iconoEstadoCampo.style.color = "red";
      mensajeError.classList.add("formularioInputError-activo");
      campos[campo] = false;

      mostrarMensajeError();
    }

    // Ocultar mensaje de error si todos los campos son correctos
    if (
      campos.nombreCompleto &&
      campos.telefono &&
      campos.direccion &&
      campos.correo &&
      campos.nombreTarjeta &&
      campos.numeroTarjeta &&
      campos.fechaCaducidad &&
      campos.cvv
    ) {
      ocultarMensajeError();
    }
  };

  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
  });

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    ocultarMensajeError();

    // Obtener los valores de los campos del formulario
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const correo = document.getElementById("correo").value;
    const nombreTarjeta = document.getElementById("nombreTarjeta").value;
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;
    const fechaCaducidad = document.getElementById("fechaCaducidad").value;
    const cvv = document.getElementById("cvv").value;

    // Verificar si todos los campos son válidos antes de continuar
    if (
      campos.nombreCompleto &&
      campos.telefono &&
      campos.direccion &&
      campos.correo &&
      campos.nombreTarjeta &&
      campos.numeroTarjeta &&
      campos.fechaCaducidad &&
      campos.cvv
    ) {
      // Crear un objeto con los datos del formulario
      const datosPago = {
        nombreCompleto,
        telefono,
        direccion,
        correo,
        nombreTarjeta,
        numeroTarjeta,
        fechaCaducidad,
        cvv,
      };

      // Convertir el objeto a cadena JSON y guardar en localStorage
      localStorage.setItem("datosPago", JSON.stringify(datosPago));

      // Redireccionar a la página de éxito
      location.href = "./buySuccessPage.html";
    }
  });


  // Función para obtener la información del carrito desde localStorage
  const obtenerInformacionDelCarrito = () => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  };
 // Función para eliminar un elemento del carrito por su índice
 function removeItemFromCart(index) {
  // Elimina el elemento del carrito usando el índice
  cartItems.splice(index, 1);
  console.log("Antes de eliminar:", cartItems);
  console.log("Después de hacer clic en eliminar:", cartItems);

alert("El accesorio se ha eliminado correctamente!")
  // Actualiza el localStorage con el carrito modificado
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Evento click en el contenedor de items para delegar la acción al botón delete
itemsContainer.addEventListener("click", (event) => {
  if (event.target && event.target.id === "delete") {
    const itemIndex = event.target.closest(".item").dataset.index;
    removeItemFromCart(itemIndex);
    mostrarElementosDelCarrito(); 
  }

});
// Función para mostrar los elementos del carrito en el contenedor
const mostrarElementosDelCarrito = () => {
  itemsContainer.innerHTML = "";

  cartItems.forEach((item, index) => {
      const newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.dataset.index = index;

    newItem.innerHTML = `
    <img class="imgPayment" src="${item.imagenes}" alt="${item.nombre}">
    <div class="itemInfo">
      <h5>${item.nombre}</h5>
      <p>Code: ${item.codigo}</p>
    </div>
    <div class="itemPrice">
      <p class="price"> $${item.precioTotal.toFixed(2)} </p>
    </div>
    <div class="btnDelete">
            <button id="delete"><i class="delete fa-regular fa-trash-can"></i></button>
        </div>
  `;
  itemsContainer.appendChild(newItem);

  // Añadir evento click al botón de eliminación
  const deleteButton = newItem.querySelector("#delete");
  deleteButton.addEventListener("click", () => {
      removeItemFromCart(index);
      mostrarElementosDelCarrito();
  });
});

};
mostrarElementosDelCarrito();

})