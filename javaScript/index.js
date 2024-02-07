import { listaDeProductos } from "../modules/products.js";


//Capta el id del producto para llevarlo a la vista de detalles
const goToDetailsProduct = (cards) => {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const idProduct = card.getAttribute("name");
      localStorage.setItem("idProduct", JSON.stringify(idProduct));
      location.href="./productDetails.html";
    });
  });
};


const filtrarProductos = (categoria, rangoPrecio, listaDeProductos) => {
  const categoriaMinusculas = categoria.toLowerCase();

  // Filtrar por categoría
  let productosFiltrados = listaDeProductos.filter(producto =>
    categoriaMinusculas === 'all' || producto.categoria.toLowerCase() === categoriaMinusculas
  );

  // Filtrar por rango de precios
  if (rangoPrecio && rangoPrecio !== 'all') {
    productosFiltrados = productosFiltrados.filter(producto =>
      producto.precio >= rangoPrecio[0] && producto.precio <= rangoPrecio[1]
    );
  }

  return productosFiltrados;
};

document.addEventListener("DOMContentLoaded", function () {
  // Obtén todos los elementos del menú de rango de precios
  const precioItems = document.querySelectorAll('.dropdownContent a');

  // Obtén todos los elementos del menú de categorías
  const menuItems = document.querySelectorAll('.headerMenu .list');

  // Obtén el contenedor de productos
  const productsContainer = document.querySelector('.products');
  const productsOneContainer = document.querySelector('.productsOne');
  const seccionContainer = document.getElementById('seccionContainer');

  // Variables para mantener el estado actual
  let categoriaActual = 'all'; // Categoría predeterminada
  let rangoPrecioActual = 'all'; // Rango de precios predeterminado

  // Agrega la clase 'categoria-seleccionada' al elemento "All" por defecto
  const categoriaAll = document.getElementById('categoria-all');
  categoriaAll.classList.add('categoria-seleccionada');

  // Función para actualizar los productos en el contenedor
  const actualizarProductos = () => {
    const productosFiltrados = filtrarProductos(categoriaActual, rangoPrecioActual, listaDeProductos);

    // Limpia el contenedor de productos
    productsContainer.innerHTML = '';
    productsOneContainer.innerHTML = '';
    seccionContainer.innerHTML = '';

    // Pinta las imágenes de los productos filtrados en el contenedor
    productosFiltrados.forEach(producto => {
      const figureElement = document.createElement('figure');
      figureElement.setAttribute("name", producto.id)
      figureElement.classList.add("card")
      figureElement.innerHTML = `
        <img src="${producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0] : ''}" alt="Product Image">
        <div class="infoProduct">
        <figcaption>${producto.nombre}</figcaption>
        <p class="productPrice">$${producto.precio}</p>
      </div>
      `;
      productsContainer.appendChild(figureElement);
    });


        // Resalta la categoría seleccionada
        menuItems.forEach(item => {
          const categoriaId = 'categoria-' + item.getAttribute('dataCategoria');
          if (item.getAttribute('dataCategoria') === categoriaActual) {
            item.classList.add('categoria-seleccionada');
          } else {
            item.classList.remove('categoria-seleccionada');
          }
        });

    console.log('Categoría seleccionada:', categoriaActual, 'Rango de precios seleccionado:', rangoPrecioActual);
  };

  // Agrega un event listener a cada elemento del menú de categorías
  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      // event.preventDefault();

      // Obtiene la categoría del atributo dataCategoria
      categoriaActual = item.getAttribute('dataCategoria');

      // Actualiza los productos en el contenedor
      actualizarProductos();
      const cards = document.querySelectorAll(".card");
      goToDetailsProduct(cards)
    });
  });

  // Agrega un event listener a cada elemento del menú de rango de precios
  precioItems.forEach(item => {
    item.addEventListener('click', function (event) {
      // event.preventDefault();

      // Obtiene el rango de precios del atributo dataPrecio
      const rangoPrecioString = item.getAttribute('dataPrecio');
      
      if (rangoPrecioString === 'all') {
        rangoPrecioActual = 'all';
      } else {
        // Parsea el rango de precios a un array de números
        const rangoPrecioArray = rangoPrecioString.split(' ').map(str => parseFloat(str.replace('$', '')));
        rangoPrecioActual = rangoPrecioArray.length === 2 ? rangoPrecioArray : 'all';
      }

      // Actualiza los productos en el contenedor
      actualizarProductos();
      const cards = document.querySelectorAll(".card");
      goToDetailsProduct(cards)
    });
  });

})


  // • Crear una función que calcule el total a pagar de una compra, reciba como parámetros
// un array de productos donde cada producto, tenga como propiedades la cantidad y
// precio unitario del producto y devuelva el valor que corresponda a la sumatoria de la
// cantidad por el precio de cada producto. Ejecutar la función con datos de prueba y
// mostrar el resultado en la consola del navegador.

const calcularTotalCompra = function (productos) {
    let total = 0;
  
    productos.forEach(producto => {
      if (producto.cantidad && producto.precio) {
        total += producto.cantidad * producto.precio;
      }
    });
  
    return total;
  };
  
  // Ejemplo de uso
  const productosCompra = [
    { cantidad: 2, precio: 125.28 },
    { cantidad: 3, precio: 268.21 },
    { cantidad: 1, precio: 620.73 },
  ];
  
  const totalCompra = calcularTotalCompra(productosCompra);
  console.log("Total a pagar de la compra:", totalCompra);




//Pinta el array en el HTML de produt Listig
const figureElements = document.querySelectorAll('.products figure, .productsOne figure, .products2 figure, .products3 figure, .card');
 
// Asigna el contenido del array a los elementos figure en orden
for (let i = 0; i < listaDeProductos.length && i < figureElements.length; i++) {
    const figureElement = figureElements[i];
    const producto = listaDeProductos[i];

    // Modifica el contenido de los elementos figure en el HTML
    figureElement.setAttribute("name",producto.id)
    figureElement.querySelector('img').src = producto.imagenes[0];
    figureElement.querySelector('figcaption').textContent = producto.nombre;
    figureElement.querySelector('.productPrice').textContent = `$${producto.precio}`;
    
}

goToDetailsProduct(figureElements);
