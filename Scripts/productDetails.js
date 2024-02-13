
document.addEventListener("DOMContentLoaded", function() {

const idProduct = JSON.parse(localStorage.getItem("idProduct"));
const selectedProduct = listaDeProductos.find(
  (product) => product.id == idProduct
);

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
              .map((item) => `<div class="square">${item.talla}</div>`)
              .join("")}
        </div>
        `;
  }

  productDetail.innerHTML = `
    <div class="imageLuxurySection">
    <div>
        <figure class="luxuryImage">
            <img class="detailsImage" id="detailsImagen" src="${producto.imagenes}" alt="${producto.nombre}">
            <img class="detailsImage" src="${producto.imagenes}" alt="${producto.nombre}">
            <img class="detailsImage" src="${producto.imagenes}" alt="${producto.nombre}">
            <img class="detailsImage" src="${producto.imagenes}" alt="${producto.nombre}">
        </figure>
    </div>
    <figure>
        <img class="detailsImg" src="${producto.imagenes}" alt="${producto.nombre}">
        <img src="../assets/productDetails/Heart.png" class="heart" alt="heart">
    </figure>
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
                <button class="buttonTrolley" id="btnCart"><img src="../assets/productDetails/Addshopping.png" class="addToCart" alt="add to cart"><a class="cartUrl"> Add to bag </a></button>
                <button class="buttonBuy "><a href="./payment.html" class="buyNow">Buy now</a></button>
            </div>
        </div>
        <div class="dropdownContainer">
            <div class="dropdown">
                <a class="dropdownPrice" href="#">Delivery▼</a>
            </div>
            <div class="dropdown">
                <a class="dropdownPrice" href="#">Payment ▼</a>
            </div>
            <div class="dropdown">
                <a class="dropdownPrice" href="#">Warranty▼</a>
            </div>
            <div class="dropdown">
                <a class="dropdownPrice" href="#">Care▼</a>
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
};

printDetailsProduct(selectedProduct);
});