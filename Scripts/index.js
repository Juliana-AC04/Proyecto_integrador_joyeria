const URL_BASE = "https://minibackend-darling-dev-mzdq.2.us-1.fl0.io/";

// Función para obtener los productos
const obtenerProductos = async () => {
  try {
    const response = await fetch(`${URL_BASE}listadeproductos`);
    if (!response.ok) {
      console.error("Error al obtener los datos de los productos:", response.statusText);
      return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos de los productos:", error);
    return [];
  }
};

//Capta el id del producto para llevarlo a la vista de detalles
const goToDetailsProduct = (cards) => {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const idProduct = card.getAttribute("name");
      localStorage.setItem("idProduct", JSON.stringify(idProduct));
      location.href = "./productDetails.html";
    });
  });
};


//Funciones de filtrado
const filtrarPorCategoria = (categoria, listaDeProductos) => {
  const categoriaMinusculas = categoria.toLowerCase();
  return listaDeProductos.filter(producto =>
    categoriaMinusculas === 'all' || producto.categoria.toLowerCase() === categoriaMinusculas
  );
};

const filtrarPorRangoPrecio = (rangoPrecio, listaDeProductos) => {
  if (!rangoPrecio || rangoPrecio === 'all') {
    return listaDeProductos;
  }
  return listaDeProductos.filter(producto =>
    producto.precio >= rangoPrecio[0] && producto.precio <= rangoPrecio[1]
  );
};

const filtrarPorNombreProducto = (nombreProducto, listaDeProductos) => {
  if (!nombreProducto || nombreProducto.trim() === '') {
    return listaDeProductos;
  }

  const nombreProductoMinusculas = nombreProducto.toLowerCase();
  return listaDeProductos.filter(producto =>
    producto.nombre.toLowerCase().includes(nombreProductoMinusculas)
  );
};

// Función principal
const filtrarProductos = (categoria, rangoPrecio, nombreProducto, listaDeProductos) => {
  let productosFiltrados = filtrarPorCategoria(categoria, listaDeProductos);
  productosFiltrados = filtrarPorRangoPrecio(rangoPrecio, productosFiltrados);
  productosFiltrados = filtrarPorNombreProducto(nombreProducto, productosFiltrados);
  return productosFiltrados;
};



document.addEventListener("DOMContentLoaded", async function () {

  try {
    // Obtener los datos de los productos
    const listaDeProductos = await obtenerProductos();

    //Pinta el array en el HTML de produt Listig
    const figureElements = document.querySelectorAll('.products figure, .productsOne figure, .products2 figure, .products3 figure, .card');

    // Asigna el contenido del array a los elementos figure en orden
    for (let i = 0; i < listaDeProductos.length && i < figureElements.length; i++) {
      const figureElement = figureElements[i];
      const producto = listaDeProductos[i];

      // Modifica el contenido de los elementos figure en el HTML
      figureElement.setAttribute("name", producto.id)
      figureElement.querySelector('img').src = producto.imagenes[0];
      figureElement.querySelector('figcaption').textContent = producto.nombre;
      figureElement.querySelector('.productPrice').textContent = `$${producto.precio}`;
      // Puedes agregar más asignaciones según sea necesario para otros datos
    }


    goToDetailsProduct(figureElements);

    const precioItems = document.querySelectorAll('.dropdownContent a');

    // todos los elementos del menú de categorías
    const menuItems = document.querySelectorAll('.headerMenu .list');

    // contenedor de productos
    const productsContainer = document.querySelector('.products');
    const productsOneContainer = document.querySelector('.productsOne');
    const seccionContainer = document.getElementById('seccionContainer');

    // Variables para mantener el estado actual
    let categoriaActual = 'all'; // Categoría predeterminada
    let rangoPrecioActual = 'all'; // Rango de precios predeterminado
    let nombreProductoActual = ''; // Nombre de producto predeterminado
    const actualizarProductos = () => {
      const productosFiltrados = filtrarProductos(categoriaActual, rangoPrecioActual, nombreProductoActual, listaDeProductos);

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
        <img  src="${producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0] : ''}" alt=${producto.nombre}>
        <div class="infoProduct">
        <figcaption>${producto.nombre}</figcaption>
        <p class="productPrice">$${producto.precio}</p>
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
    };

    // Agrega un event listener a cada elemento del menú de categorías
    menuItems.forEach(item => {
      item.addEventListener('click', function (event) {

        //  categoría del atributo dataCategoria
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

        // Rango de precios del atributo dataPrecio
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
    // Agrega un event listener al input de búsqueda por nombre
    const nombreProductoInput = document.getElementById('searchInput');

    nombreProductoInput.addEventListener('input', function () {
      nombreProductoActual = nombreProductoInput.value;
      actualizarProductos();
      const cards = document.querySelectorAll(".card");
      goToDetailsProduct(cards);
    });
  } catch (error) {
    console.error("Error al cargar la página:", error);
  }

});

