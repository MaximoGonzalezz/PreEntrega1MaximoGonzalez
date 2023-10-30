

const productos = [
  { id: "Sorrentinos", precio: 100 },
  { id: "Ravioles", precio: 200 },
  { id: "Ñoquis", precio: 300 },
  { id: "Panes Masa madre", precio: 500 },
];

let carrito = [];

let seleccion = prompt("¿Desea comprar algún producto?");

while (seleccion !== "si" && seleccion !== "no") {
  alert("Por favor, responda con 'si' o 'no'.");
  seleccion = prompt("¿Desea comprar algo? (si/no)");
}

if (seleccion === "si") {
  alert("Estos son todos nuestros productos:");
  let allProductos = productos.map((producto) => `${producto.id} - ${producto.precio}$`);
  alert(allProductos.join(" - "));
} else if (seleccion === "no") {
  alert("Gracias por visitar la web, ¡vuelva pronto!");
}

while (seleccion !== "no") {
  let producto = prompt("Escriba el nombre del producto que desea agregar al carrito");
  let precio = 0;

  if (producto === "Sorrentinos" || producto === "Ravioles" || producto === "Ñoquis" || producto === "Panes Masa madre") {
    switch (producto) {
      case "Sorrentinos":
        precio = 100;
        break;
      case "Ravioles":
        precio = 200;
        break;
      case "Ñoquis":
        precio = 300;
        break;
      case "Panes Masa madre":
        precio = 500;
        break;
      default:
        break;
    }

    let unidades = parseInt(prompt("Seleccione cuántas unidades quiere llevar"));
    carrito.push({ id: producto, unidades, precio });

    seleccion = prompt("¿Desea seguir comprando o ver su carrito? (si/no/ver)");

    if (seleccion === "ver") {
      if (carrito.length === 0) {
        alert("El carrito está vacío.");
      } else {
        let carritoItems = carrito.map((item) => `${item.id} - ${item.unidades} unidades - Total: ${item.unidades * item.precio}$`);
        alert("Carrito de Compras:\n" + carritoItems.join("\n"));
      }
      seleccion = prompt("¿Desea seguir comprando? (si/no)");
    }

    if (seleccion !== "si" && seleccion !== "no" && seleccion !== "ver") {
      alert("Por favor, responda con 'si', 'no' o 'ver'.");
      seleccion = prompt("¿Desea seguir comprando? (si/no/ver)");
    }
  } else {
    alert("Producto no encontrado");
    seleccion = prompt("¿Desea seguir comprando o ver su carrito? (si/no/ver)");
  }
}
