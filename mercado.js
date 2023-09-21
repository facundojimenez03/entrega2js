
const productos = [];
productos.push(new Producto(`chocolate`,250,"milka"));
productos.push(new Producto(`gomitas`,300,"mogul"));
productos.push(new Producto(`agua`,400,"libre"));
productos.push(new Producto(`dulce de leche`,1300,"la serenisima"));
productos.push(new Producto(`leche`,100,"la serenisima"));
productos.push(new Producto(`yogurt`,1200,"la serenisima"));


let opcion;
let salir;
let total /// valor total de la factura
let cantidad;
const detallecompra = [];

alert("bienvenido al super, presione enter para continuar");

let decicion = prompt("desea ingresar a la tienda? " + '\n'
+ "escriba si para avanzar");
while(decicion != "si"){

decicion = prompt("debe introducir si para ingresar a a la tienda ");  
}
function mostrarProductos(){
 do{
    const todosLosProductos = productos.map((item, index) => `${index + 1} - ${item.nombre} $${item.precio}`);
    opcion = parseInt(prompt('Que producto desea elegir?' + '\n' + todosLosProductos.join('\n')));
   while(opcion <= 0 || opcion > productos.length || isNaN(opcion) || opcion == undefined ){
      
    opcion = parseInt(prompt('Que producto desea elegir?' + '\n' + todosLosProductos.join('\n')));
 }
 
 productoSeleccionado = productos[opcion - 1];
 alert(`Usted selecciono el articulo ${productoSeleccionado.nombre}`)

 cantidad = parseInt( prompt("escriba la cantidad que desea"))

 detallecompra.push(new Producto(productos[opcion-1].nombre,productos[opcion-1].precio,productos[opcion -1].marca,cantidad));

 salir = prompt('Desea salir? si/no'); 

}while(salir != 'si');
}
mostrarProductos();
total = detallecompra.reduce((acum, articulo) => acum + (articulo.precio * articulo.cantidad), 0);

alert(`El total a pagar es de $${total}`);


