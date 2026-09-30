class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    aplicarDescuento(porcentaje) {
        const descuento = (this.precio * porcentaje) / 100;
        this.precio = this.precio - descuento;
        console.log(`Nuevo precio de ${this.nombre} con ${porcentaje}% off: $${this.precio}`);
    }

    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock = this.stock - cantidad;
            console.log(`Venta realizada. Quedan ${this.stock} unidades de ${this.nombre}.`);
        } else {
            console.log(`No hay suficiente stock de ${this.nombre}. Stock actual: ${this.stock}`);
        }
    }
}

const prod1 = new Producto(1, "Teclado", 15000, 10);
const prod2 = new Producto(2, "Mouse", 8500, 5);
const prod3 = new Producto(3, "Monitor", 65000, 3);

const listaProductos = [prod1, prod2, prod3];

console.log("--- Stock inicial ---");
for (const p of listaProductos) {
    console.log(`ID: ${p.id} | ${p.nombre} - $${p.precio} (Stock: ${p.stock})`);
}

console.log("\n--- Probando metodos ---");
prod1.aplicarDescuento(10);
prod2.vender(2);
prod3.vender(5);

console.log("\n--- Stock actualizado ---");
for (const p of listaProductos) {
    console.log(`ID: ${p.id} | ${p.nombre} - $${p.precio} (Stock: ${p.stock})`);
}