// En un archivo script.js, realizar lo siguiente:

// • Declarar una lista de los productos con los siguientes datos: id, nombre, código, precio
// unitario, tipo de accesorio (Rings, brazalete, Necklaces, Earrings, etc.), imágenes, descripción,
// cantidad en stock por color y/o talla.

  const listaDeProductos = [
    {
      id: 1,
      nombre: "Aurora Ring",
      codigo: 78202,
      precio: 125.28,
      categoria: "Rings",
      imagenes: ['../assets/productListing/AuroraRing.png'],
      descripcion: "Rings rodio rosado",
      stock: [
        { color: "rodio rosado", talla: "48", cantidad: 50 },
        { color: "rodio rosado", talla: "50", cantidad: 30 },
      ],
    },
  
    {
      id: 2,
      nombre: "Blissful Baubles",
      codigo: 78203,
      precio: 268.21,
      categoria: "Rings",
      imagenes: ['../assets/homepage/BlissfulBaubles.png'],
      descripcion: "Rings diamante",
      stock: [
        { color: "dorado", talla: "48", cantidad: 50 },
        { color: "dorado", talla: "50", cantidad: 30 },
        { color: "dorado", talla: "52", cantidad: 45 },
      ],
    },
    {
      id: 3,
      nombre: "Blissful Bloom Ring",
      codigo: 78204,
      precio: 620.73,
      categoria: "Rings",
      imagenes: ['../assets/productListing/BlissfulBloomRing.png'],
      descripcion: "Rings de pétalos",
      stock: [
        { color: "dorado", talla: "48", cantidad: 14 },
        { color: "dorado", talla: "50", cantidad: 30 },
        { color: "dorado", talla: "52", cantidad: 35 },
      ],
    },
    {
      id: 4,
      nombre: "Delights Earrings",
      codigo: 78201,
      precio: 327.71,
      categoria: "Earrings",
      imagenes: ['../assets/homepage/DelightsEarrings.png'],
      descripcion: "Earrings de delfin corta",
      stock: [{ color: "dorado", cantidad: 44 }],
    },
    {
      id: 5,
      nombre: "Dreamy Infinity Ring",
      codigo: 78215,
      precio: 327.71,
      categoria: "Rings",
      imagenes: ['../assets/productListing/DreamyInfinityRing.png'],
      descripcion: "Rings diamante rosa",
      stock: [
        { color: "dorado", talla: "50", cantidad: 30 },
        { color: "dorado", talla: "52", cantidad: 15 },
      ],
    },
    {
      id: 6,
      nombre: "Elegance Earrings",
      codigo: 78206,
      precio: 620.73,
      categoria: "Earrings",
      imagenes: ['../assets/homepage/EleganceEarrings.png'],
      descripcion: "Earrings de aro largo",
      stock: [{ color: "dorado", cantidad: 60 }],
    },
      {
        id: 7,
        nombre: "Exquisite Earrings",
        codigo: 92701,
        precio: 125.28,
        categoria: "Earrings",
        imagenes: ['../assets/homepage/ExquisiteEarrings.png'],
        descripcion: "Arete de gota dorado",
        stock: [{ color: "dorado", cantidad: 50 }],
      },
    
      {
        id: 8,
        nombre: "Glamour Necklace",
        codigo: 78211,
        precio: 620.73,
        categoria: "Necklaces",
        imagenes: ['../assets/homepage/GlamourNecklace.png'],
        descripcion: "Necklaces dorado de dijes redondos",
        stock: [{ color: "dorado", cantidad: 30 }],
      },
      {
        id: 9,
        nombre: "Glimmering Ring",
        codigo: 78212,
        precio: 620.73,
        categoria: "Rings",
        imagenes: ['../assets/productListing/GlimmeringRing.png'],
        descripcion: "Rings dorado de diamantes redondos",
        stock: [
          { color: "dorado", talla: "48", cantidad: 30 },
          { color: "dorado", talla: "50", cantidad: 15 },
          { color: "dorado", talla: "52", cantidad: 30 },
          { color: "dorado", talla: "56", cantidad: 25 },
        ],
      },
      {
        id: 10,
        nombre: "Luxurious Lustre",
        codigo: 78213,
        precio: 110.48,
        categoria: "Earrings",
        imagenes: ['../assets/homePage/LuxuriousLustre.png'],
        descripcion: "Arete redondo con perlas",
        stock: [{ color: "dorado", cantidad: 48 }],
      },
      {
        id: 11,
        nombre: "Luxury Charms",
        codigo: 78214,
        precio: 327.71,
        categoria: "Rings",
        imagenes: ['../assets/payment/LuxuryCharms.png'],
        descripcion: "Rings dorado de abeja",
        stock: [
          { color: "dorado", talla: "52", cantidad: 15 },
          { color: "dorado", talla: "54", cantidad: 30 },
          { color: "dorado", talla: "56", cantidad: 15 },
        ],
      },
      {
        id: 12,
        nombre: "Luxury Charms Ring",
        codigo: 78205,
        precio: 620.73,
        categoria: "Rings",
        imagenes: ['../assets/payment/LuxuryCharms.png'],
        descripcion: "Rings dorado con cuarzo",
        stock: [
          { color: "dorado", talla: "48", cantidad: 20 },
          { color: "dorado", talla: "50", cantidad: 25 },
          { color: "dorado", talla: "52", cantidad: 10 },
          { color: "dorado", talla: "56", cantidad: 18 },
          { color: "dorado", talla: "58", cantidad: 14 },
          { color: "dorado", talla: "60", cantidad: 25 },
        ],
      },
      {
        id: 13,
        nombre: "Majestic Mementos",
        codigo: 78216,
        precio: 350.24,
        categoria: "Necklaces",
        imagenes: ['../assets/homePage/MajesticMementos.png'],
        descripcion: "Necklaces grande de perlas coloridas",
        stock: [{ color: "dorado", cantidad: 56 }],
      },
      {
        id: 14,
        nombre: "Opulent Jewels Ring",
        codigo: 78217,
        precio: 168.76,
        categoria: "Rings",
        imagenes: ['../assets/productListing/OpulentJewelsRing.png'],
        descripcion: "Rings dorado de linea doble",
        stock: [
          { color: "dorado", talla: "48", cantidad: 30 },
          { color: "dorado", talla: "52", cantidad: 15 },
          { color: "dorado", talla: "54", cantidad: 30 },
          { color: "dorado", talla: "58", cantidad: 15 },
        ],
      },
      {
        id: 15,
        nombre: "Radiance Necklace",
        codigo: 78218,
        precio: 168.76,
        categoria: "Necklaces",
        imagenes: ['../assets/homePage/RadianceNecklace.png'],
        descripcion: "Necklaces doble dorado",
        stock: [{ color: "dorado", cantidad: 67 }],
      },
      {
        id: 16,
        nombre: "Radiant Reflections",
        codigo: 78219,
        precio: 230.71,
        categoria: "Necklaces",
        imagenes: ['../assets/homePage/RadiantReflections.png'],
        descripcion: "Necklaces dorado de gotas esmeralda",
        stock: [{ color: "dorado", cantidad: 74 }],
      },
      {
        id: 17,
        nombre: "Reflections Necklace",
        codigo: 78220,
        precio: 620.73,
        categoria: "Necklaces",
        imagenes: ['../assets/productListing/ReflectionsNecklace.png'],
        descripcion: "Necklaces tipo serpiete roja con negro",
        stock: [{ color: "dorado", cantidad: 46 }],
      },
      {
        id: 18,
        nombre: "Serene Solitaire Earrings",
        codigo: 78221,
        precio: 125.28,
        categoria: "Earrings",
        imagenes: ['../assets/productListing/SereneSolitaireEarrings.png'],
        descripcion: "Earrings de corazon azul",
        stock: [{ color: "dorado", cantidad: 23 }],
      },
      {
      id: 19,
      nombre: "Shimmering Stones",
      codigo: 78223,
      precio: 168.76,
      categoria: "Rings",
      imagenes: ['../assets/payment/ShimmeringStones.png'],
      descripcion: "Rings dorado de diamantes rosas",
      stock: [
        { color: "dorado", talla: "48", cantidad: 10 },
        { color: "dorado", talla: "52", cantidad: 5 },
        { color: "dorado", talla: "54", cantidad: 33 },
        { color: "dorado", talla: "58", cantidad: 65 },
      ],
    },
    {
      id: 20,
      nombre: "Sparkling Ring",
      codigo: 78224,
      precio: 620.73,
      categoria: "Rings",
      imagenes: ['../assets/productListing/SparklingRing.png'],
      descripcion: "Rings plateado circular",
      stock: [
        { color: "plateado", talla: "48", cantidad: 10 },
        { color: "plateado", talla: "54", cantidad: 15 },
        { color: "plateado", talla: "56", cantidad: 20 },
        { color: "plateado", talla: "58", cantidad: 15 },
      ],
    },
    {
      id: 21,
      nombre: "Timeless Elegance Ring",
      codigo: 78225,
      precio: 168.76,
      categoria: "Rings",
      imagenes: ['../assets/productListing/TimelessEleganceRing.png'],
      descripcion: "Rings ancho de perlas azules",
      stock: [
        { color: "dorado", talla: "48", cantidad: 37 },
        { color: "dorado", talla: "54", cantidad: 65 },
      ],
    },
    {
      id: 22,
      nombre: "Timeless Halo Earrings",
      codigo: 78235,
      precio: 620.73,
      categoria: "Earrings",
      imagenes: ['../assets/productListing/TimelessHaloEarrings.png'],
      descripcion: "Earrings cuadrados pequeños",
      stock: [{ color: "plateado", cantidad: 38 }],
    },
    {
      id: 23,
      nombre: "Timeless Treasures",
      codigo: 78250,
      precio: 687.70,
      categoria: "Earrings",
      imagenes: ['../assets/homePage/TimelessTreasures.png'],
      descripcion: "Earrings Redondos Grabados",
      stock: [{ color: "plateado", cantidad: 50 }],
    },
    {
      id: 24,
      nombre: "Divine Diamonds",
      codigo: 78256,
      precio: 580.85,
      categoria: "Rings",
      imagenes: ['../assets/homePage/DivineDiamonds.png'],
      descripcion: "Rings diamante blanco con detalles",
      stock: [{ color: "dorado", cantidad:30}],
  },
  ];

  // • Escribir una función que reciba como parámetros un array de productos y el nombre de
// un tipo de producto, que utilice la función de array que permita filtrar la lista por la
// categoría o tipo y devuelva el array resultante. Luego, llamar la función pasándole como
// argumentos la lista de productos declarado en el ítem anterior y cualquier tipo de
// accesorio que exista en la lista y, por último, mostrar el resultado en la consola del
// navegador.


const filtrarProductos = (categoria, rangoPrecio, nombreProducto, listaDeProductos) => {
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

  // Filtrar por nombre de producto
  if (nombreProducto && nombreProducto.trim() !== '') {
    productosFiltrados = productosFiltrados.filter(producto =>
      producto.nombre.toLowerCase().includes(nombreProducto.toLowerCase())
    );
  }

  return productosFiltrados;
};
document.addEventListener("DOMContentLoaded", function () {
  // todos los elementos del menú de rango de precios
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
    console.log('Nombre de producto actual:', nombreProductoActual);
    console.log('Categoría actual:', categoriaActual);
    console.log('Rango de precios actual:', rangoPrecioActual);
  
    const productosFiltrados = filtrarProductos(categoriaActual, rangoPrecioActual, nombreProductoActual, listaDeProductos);
    console.log('Productos filtrados:', productosFiltrados);
  
    // Limpia el contenedor de productos
    productsContainer.innerHTML = '';
    productsOneContainer.innerHTML = '';
    seccionContainer.innerHTML = '';
  
    // Pinta las imágenes de los productos filtrados en el contenedor
    productosFiltrados.forEach(producto => {
      const figureElement = document.createElement('figure');
      figureElement.innerHTML = `
        <img src="${producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0] : ''}" alt="Product Image">
        <p class="productName">${producto.nombre}</p>
        <p class="productPrice">$${producto.precio}</p>
      `;
      productsContainer.appendChild(figureElement);
    });
  
    console.log('Categoría seleccionada:', categoriaActual, 'Rango de precios seleccionado:', rangoPrecioActual, 'Nombre de producto:', nombreProductoActual);
  };

  // Agrega un event listener a cada elemento del menú de categorías
  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      //  categoría del atributo dataCategoria
      categoriaActual = item.getAttribute('dataCategoria');

      // Actualiza los productos en el contenedor
      actualizarProductos();
    });
  });

  // Agrega un event listener a cada elemento del menú de rango de precios
  precioItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault();

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
    });
  });
   // Agrega un event listener al input de búsqueda por nombre
   const nombreProductoInput = document.getElementById('nombreProductoInput');
   nombreProductoInput.addEventListener('input', function () {
     nombreProductoActual = nombreProductoInput.value;
     actualizarProductos();
   });
   
// • Escribir una función que realice la búsqueda de productos por nombre, reciba como
// parámetro un array de productos y un término de búsqueda (es decir, una cadena de
// caracteres) y retorne un array con todos los productos cuyos nombres contengan los
// caracteres del segundo parámetro. Luego, llamar la función pasándole como argumentos 
// datos de prueba y mostrar el resultado en la consola del navegador.

const buscarPorNombre = function (nombre,listaDeProductos) {
    const nombreMinusculas = nombre.toLowerCase(); //para que lo que ingrese el usuario concuerde con las categorias existentes
    
    const productosFiltrados = listaDeProductos.filter(producto => producto.nombre.toLowerCase().includes(nombreMinusculas));
  
    return productosFiltrados;
  }
  console.log(buscarPorNombre('luxury', listaDeProductos));

  // • Crear una función que ordene un array de productos por precios de manera ascendente
// y descendente y retorne el array resultante. Ejecutar la función y mostrar el resultado en
// consola.

const ordenarPorPrecio = function (productos, ascendente = true) {
    productos.sort((a, b) => {
      if (ascendente) {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });
  
    return productos;
  };
  
  // Ejemplo de uso
  console.log("\nOrden ascendente:", ordenarPorPrecio([...listaDeProductos]));
  console.log("\nOrden descendente:", ordenarPorPrecio([...listaDeProductos], false));
  

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
const figureElements = document.querySelectorAll('.products figure, .productsOne figure, .products2 figure, .products3 figure');
 
// Asigna el contenido del array a los elementos figure en orden
for (let i = 0; i < listaDeProductos.length && i < figureElements.length; i++) {
    const figureElement = figureElements[i];
    const producto = listaDeProductos[i];

    // Modifica el contenido de los elementos figure según tu estructura HTML y datos del array
    figureElement.querySelector('img').src = producto.imagenes[0];
    figureElement.querySelector('figcaption a').textContent = producto.nombre;
    figureElement.querySelector('.productPrice').textContent = `$${producto.precio}`;
    // Puedes agregar más asignaciones según sea necesario para otros datos
}
})