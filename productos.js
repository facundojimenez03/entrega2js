class Producto {
    nombre;
    precio;
    marca;
    cantidad;   
    subtotal;

    constructor(nombre,precio,marca,cantidad) {
        this.nombre = nombre;
        this.precio= precio;
        this.marca = marca;
        this.cantidad = cantidad;
        this.subtotal = this.precio*this.suma;
    }
}