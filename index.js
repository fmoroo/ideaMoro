/*
        PAGINA DE COMIDA
        - Stock a la venta(productos)
            * Variables --> guardar el stock
        - Eleccion del usuario (carrito)
            * Variables --> Guardar la eleccion del usuario
            * Variables --> Guardar el precio de los items
        
        - Info a mostrar: Stock, Carrito, PrecioCart(alerts)
        - Info a recibir: eleccion del cliente (prompts)

*/

// declaracion de variables 
/*
let carrito = []; //Declaramos el array para el carrito
let montoTotal = 0; //Declaramos el monto total de la compra
let items = [ //Declaramos la lista de items en array con formato Nombre y precio
	{ nombre: "Milanesa x1", precio: 2000 },
	{ nombre: "Ravioles x1", precio: 1700 },
	{ nombre: "Pollo x1", precio: 1500 },
	{ nombre: "Guiso x1", precio: 1300 }
  ];

let stock = items.map(function(producto, index) {
return `${index + 1}. ${producto.nombre} - ${producto.precio}$`;
}).join('\n'); //Armamos el string con el formato de la lista de items para mostrarselo al cliente

let user = prompt("Ingrese su nombre").toLowerCase()
alert("Bienvenido "+ user)
let eleccionUser = parseInt(prompt(`${user} estas son nuestras comidas, por favor elige una opción: \n${stock} \nSi usted desea ver el carrito precione 9, si desea finalizar su compra precione 0`));

while(eleccionUser !=0){
    switch(eleccionUser) {
        case 1:
            addCarrito("Milanesa x1", 2000)
            break

        case 2: 
            addCarrito("Ravioles x1", 1700)
            break
        
        case 3:
            addCarrito("Pollo x1", 1500)
            break
        
        case 4:
            addCarrito("Guiso x1", 1300)
            break

		case 9:
			let itemsSeleccionados = verCarrito();
			if (itemsSeleccionados.length === 0){
				alert("No tienes nada en tu carrito")
			}
			else{
				alert(`${user} su carrito actual es: \n${itemsSeleccionados} \nCon un subtotal de ${obtenerMontoTotal()}$ pesos`)
			}
			break
        
        default:
            alert("no tenemos el producto elegido")
    } 
    eleccionUser = parseInt(prompt(`${user} estas son nuestras comidas, porfavor elige una opcion: \n${stock} \nSi usted desea ver el carrito precione 9, si desea finalizar su compra precione 0`))
}

pedido()
compra()





// funcion para agregar el producto al carrito
function addCarrito(comida,precio){
    alert("agregamos tu comida al carrito")
    carrito.push({ nombre: comida, precio: precio }); //Sabemos que en la posición 0 es nombre y la posición 1 es precio
}

// funcion para agregar el producto al carrito
function obtenerMontoTotal() {
	let precioTotal = carrito.reduce(function(acumulador, elementoActual) {
	  return acumulador + elementoActual.precio; // Accede a la propiedad 'precio'
	}, 0);
	return precioTotal;
}

// funcion para vr el carrito
function verCarrito() {
	let itemsSeleccionados = carrito.map(function(producto, index) {
		return `${index + 1}. ${producto.nombre} - ${producto.precio}$`;
		}).join('\n'); //Armamos el string con el formato de la lista de items para mostrarselo al cliente
	return itemsSeleccionados;
}

// funcion para mostrar lo pedido
function pedido(){
    if (carrito.length === 0){
        alert(`${user} no has agregado nada a tu carrito, lamentamos que no le haya convencido nuestro catalogo`)
    }else{
		
		let itemsSeleccionados = verCarrito();
		montoTotal = obtenerMontoTotal();

        alert(`${user} le mostramos su pedido: \n${itemsSeleccionados}\nEsta compra tendría un monto de ${montoTotal}$ pesos`)

        let numero = parseInt(prompt("Si sos empleado de la empresa marca 1 y si no lo sos, marca 2"))
        while (numero != 1 && numero != 2){
            numero = parseInt(prompt("Ingresaste un numero inválido, por favor ingrese 1 si eres empleado o 2 si no lo eres"))
        }

        if (numero === 1){
			let porcentaje = (montoTotal * 0.15)
			let descuento = (montoTotal - porcentaje)
            alert(`${user} como sos empleado de la empresa tenés un codigo de descuento del 15%!! Por ende, la comida te saldría ${descuento}`)     
        }else{
            alert(`${user} como no sos empleado de la empresa la comida tendrá un costo total de: ${montoTotal}$ pesos`)
        }
    }   

}

// funcion para acordar metodo de pago
function compra(){
    if (montoTotal != 0 ){
        const metodo = parseInt(prompt("Cómo desea abonar? Seleccione una de las siguientes opciones \n 1. Abonar con efectivo al repartidor \n 2. Tajerta debito/credito \n 3. Mercado pago"))

        while (metodo != 1 && metodo != 2 && metodo != 3){
            metodo = parseInt(prompt("Cómo desea abonar? Seleccione una de las siguientes opciones \n 1. Abonar con efectivo al repartidor \n 2. Tajerta debito/credito \n 3. Mercado pago"))
        }
        switch(metodo){
            case 1:
                alert("El repartidor llevara el ticket asi lo abonas en efectivo")
                break

            case 2:
                prompt("Ingrese el numero de su tarjeta")
                prompt("Ingrese la fecha de vencimiento")
                prompt("Ingrese el codigo de seguridad de tres digitos")
                break
            
            case 3:
                alert("Nuestro Alias: el.barsito.mp \n nuestro CBU: 00000513548496")
                break
            
            default:
                alert("Ingrese un numero correcto")
                break
        }
        alert(`${user} gracias por realizar el pedido, espero que lo disfrute!`)
    } 
}
*/

let subir = document.getElementById("presentacion");
subir.innerHTML += "<h2>Bienvenidx, ingrese su nombre</h2>";

const formNombre = document.getElementById("formulario");
const nombre = document.getElementById("nombreUsuario");
const dni = document.getElementById("dniUsuario");
const boton = document.getElementById("btnEnvio");

const comida = document.getElementById("select-comida");
const bebida = document.getElementById("select-bebida");

function reconocerCliente() {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) == dni.value) {
      console.log("usuario ya registrado");
    } else {
      console.log("usuario nuevo");
    }
  }
}

nombre.onmousedown = () => {
  console.log("down");
};

nombre.onkeyup = () => {
  console.log("keyup");
};

formNombre.onsubmit = (e) => {
  let infoUsuario = e.target;
  let nombreUsuario = infoUsuario.querySelector("#nombreUsuario").value;
  let apellido = document.getElementById("apellidoUsuario").value;
  localStorage.setItem("nombre", nombreUsuario);

  let mensaje = localStorage.getItem("nombre");
  console.log(mensaje);

  const usuario = { id: 4, Nombre: nombreUsuario + " " + apellido };
  const enJSON = JSON.stringify(usuario);
  localStorage.setItem("usuario", enJSON);

  let parseado1 = JSON.parse(enJSON);
  localStorage.setItem("usuarioID", parseado1.id);

  let valorDni = dni.value;
  localStorage.setItem("D.N.I", valorDni);

  let valorComida = comida.value;
  localStorage.setItem("Comida", valorComida);

  let valorBebida = bebida.value;
  localStorage.setItem("Bebida", valorBebida);

};

reconocerCliente();