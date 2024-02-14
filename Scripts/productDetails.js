const idProduct = JSON.parse(localStorage.getItem("idProduct"));
const URL_BASE = "https://minibackend-darling-dev-mzdq.2.us-1.fl0.io/";

// Función asincrónica para obtener los detalles del producto
const fetchProductDetails = async () => {
  try {
    // Petición GET
    const response = await fetch(`${URL_BASE}listadeproductos`);
    if (!response.ok) {
      console.error(
        "Error al obtener los detalles del producto:",
        response.statusText
      );
      return null;
    }

    const productList = await response.json();

    const selectedProduct = productList.find(
      (producto) => producto.id == idProduct
    );

    if (!selectedProduct) {
      console.error("Producto seleccionado no encontrado");
      return null;
    }

    return selectedProduct;
  } catch (error) {
    console.error("Error al obtener los detalles del producto:", error);
    return null;
  }
};

// Función para inicializar
const initializeProductDetails = async () => {
  try {
    const selectedProduct = await fetchProductDetails();

    if (!selectedProduct) {
      console.error("No hay producto disponible");
      return;
    }
    printDetailsProduct(selectedProduct);
  } catch (error) {
    console.error("Error al inicializar los detalles del producto:", error);
  }
};

//Esto pinta la informarción de nuestro producto seleccionado
const printDetailsProduct = (producto) => {
  const nombreProducto = document.getElementById("nombreProducto");

  const productDetail = document.getElementById("productDetail");

  nombreProducto.innerText = producto.nombre;

  // Generar HTML para las opciones de color
  const colorsHTML = producto.stock
    .map((item) => {
      let colorClass = "";
      if (item.color === "dorado") {
        colorClass = "gold";
        return `<div class="${colorClass}"></div>`;
      } else if (item.color === "plateado") {
        colorClass = "silver";
        return `<div class="${colorClass}"></div>`;
      }
    })
    .find((element) => element !== undefined); // Encuentra el primer elemento no indefinido (el primer div creado)

  const colorDisponible = producto.stock[0].color;

  // Generar HTML para las opciones de talla
  let sizesHTML = "";
  if (producto.categoria !== "Necklaces" && producto.categoria !== "Earrings") {
    sizesHTML = `
            <div class="ringSize">
                <p class="size">Size</p>
                <p class="sizeOption">What is my size?</p>
            </div>
            <div class="squareContainer">
            ${producto.stock
              .map(
                (item) => `<button class="square talla" >${item.talla}</button>`
              )
              .join("")}
        </div>
        `;
  }

  productDetail.innerHTML = `
    <div class="imageLuxurySection">
    <div class="luxuryImage">
            <img class="detailsImage" id="detailsImagen" src="${producto.imagenes}" alt="${producto.nombre}">
            <img class="detailsImage" src="${producto.imagenes}" alt="${producto.nombre}">
            <img class="detailsImage" src="${producto.imagenes}" alt="${producto.nombre}">
            <img class="detailsImage" src="${producto.imagenes}" alt="${producto.nombre}">
    </div>
    <div class="imagenPrincipal">
        <img class="detailsImg" src="${producto.imagenes}" alt="${producto.nombre}">
        <img src="../assets/productDetails/Heart.png" class="heart" alt="heart">
    </div>
    <div class="headerSectionDiv">
        <h3 class="headerSection">${producto.nombre}</h3>
        <p class="code">Code: ${producto.codigo}</p>
        <p class="price">$${producto.precio}</p>
        <p class="color">Color - ${colorDisponible}</p>
        <div class="opcionColor">
            ${colorsHTML}
        </div>
        ${sizesHTML}
        <div class="quantitySection">
            <p class="quantity">Quantity</p>
            <div class="squareQuantityLuxury">
                <button class="squareQuantity" id="decrement">-</button>
                <div class="squareQuantity" id="quantity">1</div>
                <button class="squareQuantity" id="increment">+</button>
            </div>
            <div class="button">
                <button id="btnCart" class="buttonTrolley bag" ><img src="../assets/productDetails/Addshopping.png" class="addToCart" alt="add to cart"><a class="cartUrl"> Add to bag </a></button>
                <button class="buttonBuy "><a class="buyNow">Buy now</a></button>
            </div>
        </div>
        <div class="dropdownContainer">
            <div class="dropdown">
                <a class="dropdownPrice" >Delivery▼</a>
            </div>
            <div class="dropdown">
                <a class="dropdownPrice" >Payment ▼</a>
            </div>
            <div class="dropdown">
                <a class="dropdownPrice" >Warranty▼</a>
            </div>
            <div class="dropdown">
                <a class="dropdownPrice" >Care▼</a>
            </div>
        </div>
    </div>
</div>
  `;

  // Obtener el elemento de cantidad y los botones de incremento y decremento
  const quantityElement = document.getElementById("quantity");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  // Agregar eventos de clic a los botones de incremento y decremento
  incrementButton.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = currentQuantity + 1;
  });

  decrementButton.addEventListener("click", () => {
    const currentQuantity = parseInt(quantityElement.textContent);
    if (currentQuantity > 0) {
      quantityElement.textContent = currentQuantity - 1;
    }
  });

  // Obtener todos los botones de talla
  const tallaButtons = document.querySelectorAll(".talla");

  // Agregar un controlador de eventos de clic a cada botón de talla
  tallaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Eliminar la clase "selected" de todos los botones de talla
      tallaButtons.forEach((btn) => {
        btn.classList.remove("selected");
      });

      // Agregar la clase "selected" solo al botón de talla seleccionado
      button.classList.add("selected");
    });
  });

  // Obtener el botón "Add to bag"
  const addToBagButton = document.querySelector(".buttonTrolley.bag");

  // Agregar un controlador de eventos al botón "Add to bag"
  addToBagButton.addEventListener("click", () => {
    // Verificar si el producto es un anillo y requiere selección de talla
    if (producto.categoria === "Rings") {
      // Si es un anillo, verificar si se ha seleccionado una talla
      const selectedSize = document.querySelector(".talla.selected");
      if (!selectedSize) {
        alert("Por favor seleccione una talla antes de añadir al carrito");
        return;
      }
    }

    // Si se seleccionó una talla o si el producto no es un anillo, agregar al carrito y abrir el modal
    addToCart();

    modal.classList.remove("hidden");

    const closeButton = document.getElementById("closeModal");

    // Agregar un controlador de eventos al botón de cerrar modal
    closeButton.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });

  // Obtener el botón "Buy Now"
  const buyNowButton = document.querySelector(".buttonBuy");

  // Agregar un controlador de eventos al botón "Buy Now"
  buyNowButton.addEventListener("click", () => {
    // Verificar si el producto es un anillo y requiere selección de talla
    if (producto.categoria === "Rings") {
      // Si es un anillo, verificar si se ha seleccionado una talla
      const selectedSize = document.querySelector(".talla.selected");
      if (!selectedSize) {
        alert("Por favor seleccione una talla antes de proceder al pago");
        return;
      }
    }

    // Si se seleccionó una talla o si el producto no es un anillo, proceder a la página de pago
    addToCart();
    window.location.href = "./payment.html";
  });

  function addToCart() {
    // Obtener la cantidad seleccionada
    const quantity = parseInt(document.getElementById("quantity").textContent);

    // Obtener la talla seleccionada si es un anillo
    let selectedSize = null;
    if (producto.categoria === "Rings") {
      selectedSize = document.querySelector(".talla.selected");
      if (!selectedSize) {
        // Si es un anillo y no se ha seleccionado una talla, salir de la función sin agregar al carrito
        return;
      }
    }

    // Obtener el carrito de compras del almacenamiento local
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Buscar si el producto ya está en el carrito
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.id === idProduct &&
        item.talla === (selectedSize ? selectedSize.textContent : null)
    );

    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, actualizar la cantidad
      cartItems[existingItemIndex].cantidad += quantity;
    } else {
      // Si el producto no está en el carrito, agregarlo
      cartItems.push({
        id: idProduct,
        nombre: producto.nombre,
        codigo: producto.codigo,
        color: colorDisponible,
        talla: selectedSize ? selectedSize.textContent : null,
        cantidad: quantity,
        precioUnitario: producto.precio,
        precioTotal: producto.precio * quantity,
      });
    }

    // Almacenar el carrito actualizado en el almacenamiento local
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("¡Producto añadido al carrito de manera exitosa!");

    // Eliminar la clase "selected" del botón de talla seleccionado
    if (selectedSize) {
      selectedSize.classList.remove("selected");
    }
  }
};

initializeProductDetails();
