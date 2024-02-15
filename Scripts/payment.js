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

    // Crear un objeto con los datos del pago
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

    // Obtener información del carrito
    const cartItems = obtenerInformacionDelCarrito();

    // Crear un objeto con la orden de compra
    const ordenDeCompra = {
        id: generateUniqueId(), // Generar un ID único
        fecha: getCurrentDate(), // Agregar la fecha actual
        numeroOrden: generateOrderNumber(), // Generar un número de orden al azar
        datosPago,
        cartItems,
    };

    // Enviar la orden de compra a la URL especificada
    fetch('https://minibackend-darling-dev-mzdq.2.us-1.fl0.io/ordenescompras', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ordenDeCompra),
    })
    .then(response => {
        if (!response.ok && response.status !== 500) {
            throw new Error('Hubo un problema al procesar la orden de compra.');
        }
        // Restar la cantidad de productos comprados del stock en el servidor
        restarCantidadStock(cartItems);
    })
    .then(() => {
        // Limpiar el localStorage
        localStorage.removeItem("cartItems");
        localStorage.removeItem("datosPago");
        // Redireccionar a la página de éxito
        location.href = "./buySuccessPage.html";
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema al procesar la orden de compra. Por favor, inténtelo de nuevo más tarde.');
    });
});

// Función para obtener la fecha actual en formato YYYY-MM-DD
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }

    return `${year}-${month}-${day}`;
}

// Función para generar un número de orden aleatorio
function generateOrderNumber() {
    return Math.floor(Math.random() * 1000000);
}

// Función para restar la cantidad de productos comprados del stock en el servidor
// Función para restar la cantidad de productos comprados del stock en el servidor
function restarCantidadStock(cartItems) {
  // Obtener la lista de productos del servidor
  fetch('https://minibackend-darling-dev-mzdq.2.us-1.fl0.io/listadeproductos')
  .then(response => response.json())
  .then(productos => {
      // Iterar sobre los productos en el carrito
      cartItems.forEach(item => {
          // Buscar el producto correspondiente en la lista de productos
          const producto = productos.find(producto => producto.codigo === item.codigo);
          if (producto) {
              // Verificar si el producto tiene stock y es de tipo "anillo"
              if (producto.stock && producto.stock.length > 0 && producto.tipo === 'anillo') {
                  // Encontrar la talla específica en el stock del producto
                  const tallaEnStock = producto.stock.find(stockItem => stockItem.talla === item.talla);
                  // Restar la cantidad comprada del stock de esa talla
                  if (tallaEnStock && tallaEnStock.cantidad >= item.cantidad) {
                      tallaEnStock.cantidad -= item.cantidad;
                  }
              } else {
                  // Restar la cantidad del producto si no tiene stock o no es de tipo "anillo"
                  if (producto.cantidad >= item.cantidad) {
                      producto.cantidad -= item.cantidad;
                  }
              }
          }
      });
      // Enviar los datos actualizados al servidor
      fetch('https://minibackend-darling-dev-mzdq.2.us-1.fl0.io/listadeproductos', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(productos),
      });
  })
  .catch(error => console.error('Error:', error));
}



// Función para generar un ID único (puedes usar un método más robusto en una aplicación real)
function generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
}



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