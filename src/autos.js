const Vehiculo = require("./vehiculos");

module.exports = class Auto extends Vehiculo {
  constructor(marca, modelo, precio, puertas) {
    super(marca, modelo, precio);
    this._puertas = puertas;
  }

  puertas() {
    return this._puertas;
  }

  mostrar() {
    return (
      "Marca: " +
      this.marca() +
      " // Modelo: " +
      this.modelo() +
      " // Puertas: " +
      this.puertas() +
      " // Precio: $" +
      this.precio()
        .toFixed(2)
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  }
};
