const Vehiculo = require("./vehiculos");

module.exports = class Moto extends Vehiculo {
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this._cilindrada = cilindrada;
  }

  cilindrada() {
    return this._cilindrada;
  }

  mostrar() {
    return (
      "Marca: " +
      this.marca() +
      " // Modelo: " +
      this.modelo() +
      " // Cilindrada: " +
      this.cilindrada() +
      " // Precio: $" +
      this.precio()
        .toFixed(2)
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  }
};
