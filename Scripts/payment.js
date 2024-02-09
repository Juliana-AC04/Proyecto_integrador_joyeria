document.addEventListener("DOMContentLoaded", function() {

  const formulario = document.getElementById("procesarPago");

  const inputs = document.querySelectorAll('#procesarPago input');

  const expresiones = {
    nombreCompleto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,10}$/, // 7 a 10 numeros.
    direccion: /^[A-Za-z0-9\s,#.'-]+$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    numeroTarjeta: /^\d{14,16}$/, // solo entre 14-16 digitos
    cvv: /^\d{3}$/
  }

  const campos={
    nombreCompleto: false,
    telefono: false,
    direccion: false,
    correo: false,
    numeroTarjeta: false,
    cvv: false
  }

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "nombreCompleto":
        validarCampo(expresiones.nombreCompleto, e.target, 'nombreCompleto');
      break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target, 'telefono');
      break;
      case "direccion":
        validarCampo(expresiones.direccion, e.target, 'direccion');
      break;
      case "correo":
        validarCampo(expresiones.correo, e.target, 'correo');
      break;
      case "numeroTarjeta":
        validarCampo(expresiones.numeroTarjeta, e.target, 'numeroTarjeta');
      break;
      case "cvv":
        validarCampo(expresiones.cvv, e.target, 'cvv');
      break;
    }
  }


  //validacion de campos y adicion de estilos a errores
  const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
      document.getElementById(`grupo_${campo}`).classList.remove('formularioGrupoIncorrecto');
      document.getElementById(`grupo_${campo}`).classList.add('formularioGrupoCorrecto');
      document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#grupo_${campo} .formularioInputError`).classList.remove('formularioInputError-activo');
      campos[campo] = true;
    } else {
      document.getElementById(`grupo_${campo}`).classList.add('formularioGrupoIncorrecto');
      document.getElementById(`grupo_${campo}`).classList.remove('formularioGrupoCorrecto');
      document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo_${campo} .formularioInputError`).classList.add('formularioInputError-activo');
      campos[campo] = false;
    }

    // Validar longitud específica para algunos campos
    if (campo === 'telefono' && input.value.length > 10) {
      document.getElementById(`grupo_${campo}`).classList.add('formularioGrupoIncorrecto');
      document.getElementById(`grupo_${campo}`).classList.remove('formularioGrupoCorrecto');
      document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo_${campo} .formularioInputError`).classList.add('formularioInputError-activo');
      campos[campo] = false;
    }

    if (campo === 'numeroTarjeta' && input.value.length > 16) {
      document.getElementById(`grupo_${campo}`).classList.add('formularioGrupoIncorrecto');
      document.getElementById(`grupo_${campo}`).classList.remove('formularioGrupoCorrecto');
      document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo_${campo} .formularioInputError`).classList.add('formularioInputError-activo');
      campos[campo] = false;
    }

    if (campo === 'cvv' && input.value.length > 3) {
      document.getElementById(`grupo_${campo}`).classList.add('formularioGrupoIncorrecto');
      document.getElementById(`grupo_${campo}`).classList.remove('formularioGrupoCorrecto');
      document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo_${campo} .formularioInputError`).classList.add('formularioInputError-activo');
      campos[campo] = false;
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });
  

  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos del formulario
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const correo = document.getElementById("correo").value;
    // const nombreTarjeta = document.getElementById("nombreTarjeta").value;
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;
    const fechaCaducidad = document.getElementById("fechaCaducidad").value;
    const cvv = document.getElementById("cvv").value;

    // Verificar si todos los campos son válidos antes de continuar
    if (campos.nombreCompleto && campos.telefono && campos.direccion && campos.correo && campos.numeroTarjeta && campos.cvv) {
      // Crear un objeto con los datos del formulario
      const datosPago = {
        nombreCompleto: nombreCompleto,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
        numeroTarjeta: numeroTarjeta,
        fechaCaducidad: fechaCaducidad,
        cvv: cvv
      };

      // Convertir el objeto a cadena JSON y guardar en localStorage
      localStorage.setItem("datosPago", JSON.stringify(datosPago));

      // Redireccionar a la página de éxito
      location.href = "./buySuccessPage.html";
    } else {
      // Mostrar mensaje de error o realizar alguna acción adicional
      document.getElementById("formularioMensaje").classList.add("formularioMensaje-activ")
    }
  });
});
