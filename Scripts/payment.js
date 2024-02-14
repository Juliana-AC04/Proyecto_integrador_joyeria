document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("procesarPago");
  const inputs = document.querySelectorAll("#procesarPago input");

  const expresiones = {
    nombreCompleto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,10}$/,
    direccion: /^[A-Za-z0-9\s,#.'-]+$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeroTarjeta: /^\d{14,16}$/,
    fechaCaducidad: /^(20\d{2})-(0[1-9]|1[0-2])$/, // Formato YYYY-MM para fecha de caducidad
    cvv: /^\d{3}$/,
  };

  const campos = {
    nombreCompleto: false,
    telefono: false,
    direccion: false,
    correo: false,
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
    event.preventDefault(); // Evitar que el formulario se envíe

    // Ocultar mensaje de error si está visible
    ocultarMensajeError();

    // Obtener los valores de los campos del formulario
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const correo = document.getElementById("correo").value;
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;
    const fechaCaducidad = document.getElementById("fechaCaducidad").value;
    const cvv = document.getElementById("cvv").value;

    // Verificar si todos los campos son válidos antes de continuar
    if (
      campos.nombreCompleto &&
      campos.telefono &&
      campos.direccion &&
      campos.correo &&
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
});
