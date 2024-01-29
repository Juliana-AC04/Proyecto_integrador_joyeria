// En un archivo script.js, realizar lo siguiente:

// • Declarar una lista de los productos con los siguientes datos: id, nombre, código, precio
// unitario, tipo de accesorio (anillo, brazalete, collar, aretes, etc.), imágenes, descripción,
// cantidad en stock por color y/o talla.

const listaDeProductos = [
    {
      id: 1,
      nombre: "Aurora Ring",
      codigo: 78202,
      precio: 125.28,
      categoria: "Anillo",
      imagenes: ['AuroraRing.png'],
      descripcion: "Anillo rodio rosado",
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
      categoria: "Anillo",
      imagenes: ['g-image2.png'],
      descripcion: "Anillo diamante",
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
      categoria: "Anillo",
      imagenes: ['BlissfulBloomRing.png'],
      descripcion: "Anillo de pétalos",
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
      categoria: "Aretes",
      imagenes: ['DelightsEarrings'],
      descripcion: "Aretes de delfin corta",
      stock: [{ color: "dorado", cantidad: 44 }],
    },
    {
      id: 5,
      nombre: "Dreamy Infinity Ring",
      codigo: 78215,
      precio: 327.71,
      categoria: "Anillo",
      imagenes: ['DreamyInfinityRing'],
      descripcion: "Anillo diamante rosa",
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
      categoria: "Aretes",
      imagenes: ['EleganceEarrings'],
      descripcion: "Aretes de aro largo",
      stock: [{ color: "dorado", cantidad: 60 }],
    },
    {
      id: 7,
      nombre: "Exquisite Earrings",
      codigo: 92701,
      precio: 125.28,
      categoria: "Aretes",
      imagenes: ['ExquisiteEarrings'],
      descripcion: "Arete de gota dorado",
      stock: [{ color: "dorado", cantidad: 50 }],
    },
    {
      id: 8,
      nombre: "Exquisite Ornaments",
      codigo: 78210,
      precio: 125.28,
      categoria: "Aretes",
      imagenes: ['ExquisiteOrnaments'],
      descripcion: "Aretes de hojas dorado",
      stock: [{ color: "dorado", cantidad: 69 }],
    },
    {
      id: 9,
      nombre: "Glamour Necklace",
      codigo: 78211,
      precio: 620.73,
      categoria: "Collar",
      imagenes: ['GlamourNecklace'],
      descripcion: "Collar dorado de dijes redondos",
      stock: [{ color: "dorado", cantidad: 30 }],
    },
    {
      id: 10,
      nombre: "Glimmering Ring",
      codigo: 78212,
      precio: 620.73,
      categoria: "Anillo",
      imagenes: ['GlimmeringRing'],
      descripcion: "Anillo dorado de diamantes redondos",
      stock: [
        { color: "dorado", talla: "48", cantidad: 30 },
        { color: "dorado", talla: "50", cantidad: 15 },
        { color: "dorado", talla: "52", cantidad: 30 },
        { color: "dorado", talla: "56", cantidad: 25 },
      ],
    },
    {
      id: 11,
      nombre: "Luxurious Lustre",
      codigo: 78213,
      precio: 110.48,
      categoria: "Aretes",
      imagenes: ['LuxuriousLustre'],
      descripcion: "Arete redondo con perlas",
      stock: [{ color: "dorado", cantidad: 48 }],
    },
    {
      id: 12,
      nombre: "Luxury Charms",
      codigo: 78214,
      precio: 327.71,
      categoria: "Anillo",
      imagenes: ['LuxuryCharms'],
      descripcion: "Anillo dorado de abeja",
      stock: [
        { color: "dorado", talla: "52", cantidad: 15 },
        { color: "dorado", talla: "54", cantidad: 30 },
        { color: "dorado", talla: "56", cantidad: 15 },
      ],
    },
    {
      id: 13,
      nombre: "Luxury Charms Ring",
      codigo: 78205,
      precio: 620.73,
      categoria: "Anillo",
      imagenes: ['LuxuryCharms'],
      descripcion: "Anillo dorado con cuarzo",
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
      id: 14,
      nombre: "Majestic Mementos",
      codigo: 78216,
      precio: 350.24,
      categoria: "Collar",
      imagenes: ['MajesticMementos'],
      descripcion: "Collar grande de perlas coloridas",
      stock: [{ color: "dorado", cantidad: 56 }],
    },
    {
      id: 15,
      nombre: "Opulent Jewels Ring",
      codigo: 78217,
      precio: 168.76,
      categoria: "Anillo",
      imagenes: ['OpulentJewelsRing'],
      descripcion: "Anillo dorado de linea doble",
      stock: [
        { color: "dorado", talla: "48", cantidad: 30 },
        { color: "dorado", talla: "52", cantidad: 15 },
        { color: "dorado", talla: "54", cantidad: 30 },
        { color: "dorado", talla: "58", cantidad: 15 },
      ],
    },
    {
      id: 16,
      nombre: "Radiance Necklace",
      codigo: 78218,
      precio: 168.76,
      categoria: "Collar",
      imagenes: ['RadianceNecklace'],
      descripcion: "Collar doble dorado",
      stock: [{ color: "dorado", cantidad: 67 }],
    },
    {
      id: 17,
      nombre: "Radiant Reflections",
      codigo: 78219,
      precio: 230.71,
      categoria: "Collar",
      imagenes: ['RadiantReflections'],
      descripcion: "Collar dorado de gotas esmeralda",
      stock: [{ color: "dorado", cantidad: 74 }],
    },
    {
      id: 18,
      nombre: "Reflections Necklace",
      codigo: 78220,
      precio: 620.73,
      categoria: "Collar",
      imagenes: ['ReflectionsNecklace'],
      descripcion: "Collar tipo serpiete roja con negro",
      stock: [{ color: "dorado", cantidad: 46 }],
    },
    {
      id: 19,
      nombre: "Serene Solitaire Earrings",
      codigo: 78221,
      precio: 125.28,
      categoria: "Aretes",
      imagenes: ['SereneSolitaireEarrings'],
      descripcion: "Aretes de corazon azul",
      stock: [{ color: "dorado", cantidad: 23 }],
    },
    {
      id: 20,
      nombre: "Shimmering Stones",
      codigo: 78223,
      precio: 168.76,
      categoria: "Anillo",
      imagenes: ['ShimmeringStones'],
      descripcion: "Anillo dorado de diamantes rosas",
      stock: [
        { color: "dorado", talla: "48", cantidad: 10 },
        { color: "dorado", talla: "52", cantidad: 5 },
        { color: "dorado", talla: "54", cantidad: 33 },
        { color: "dorado", talla: "58", cantidad: 65 },
      ],
    },
    {
      id: 21,
      nombre: "Sparkling Ring",
      codigo: 78224,
      precio: 620.73,
      categoria: "Anillo",
      imagenes: ['SparklingRing'],
      descripcion: "Anillo plateado circular",
      stock: [
        { color: "plateado", talla: "48", cantidad: 10 },
        { color: "plateado", talla: "54", cantidad: 15 },
        { color: "plateado", talla: "56", cantidad: 20 },
        { color: "plateado", talla: "58", cantidad: 15 },
      ],
    },
    {
      id: 22,
      nombre: "Timeless Elegance Ring",
      codigo: 78225,
      precio: 168.76,
      categoria: "Anillo",
      imagenes: ['TimelessEleganceRing'],
      descripcion: "Anillo ancho de perlas azules",
      stock: [
        { color: "dorado", talla: "48", cantidad: 37 },
        { color: "dorado", talla: "54", cantidad: 65 },
      ],
    },
    {
      id: 23,
      nombre: "Timeless Halo Earrings",
      codigo: 78235,
      precio: 620.73,
      categoria: "Aretes",
      imagenes: ['TimelessHaloEarrings'],
      descripcion: "Aretes cuadrados pequeños",
      stock: [{ color: "plateado", cantidad: 38 }],
    },
    {
      id: 24,
      nombre: "Timeless Treasures",
      codigo: 78250,
      precio: 687.70,
      categoria: "Aretes",
      imagenes: ['Timeless Treasures'],
      descripcion: "Aretes Redondos Grabados",
      stock: [{ color: "plateado", cantidad: 50 }],
    },
    {
      id: 25,
      nombre: "Divine Diamonds",
      codigo: 78256,
      precio: 580.85,
      categoria: "Anillo",
      imagenes: ['DivineDiamonds'],
      descripcion: "Anillo diamante blanco con detalles",
      stock: [{ color: "dorado", cantidad: 30 }],
    },
  ];

  // • Escribir una función que reciba como parámetros un array de productos y el nombre de
// un tipo de producto, que utilice la función de array que permita filtrar la lista por la
// categoría o tipo y devuelva el array resultante. Luego, llamar la función pasándole como
// argumentos la lista de productos declarado en el ítem anterior y cualquier tipo de
// accesorio que exista en la lista y, por último, mostrar el resultado en la consola del
// navegador.


const tipoProducto = function (categoria, listaDeProductos) {
    let categoriaMinusculas = categoria.toLowerCase(); //para que lo que ingrese el usuario concuerde con las categorias existentes
    
    let productosFiltrados = listaDeProductos.filter(producto => producto.categoria.toLowerCase() === categoriaMinusculas);
    return productosFiltrados;
  }
  console.log(tipoProducto('Aretes', listaDeProductos));

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