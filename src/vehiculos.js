module.exports = class Vehiculo {
  constructor(marca, modelo, precio) {
    this._marca = marca;
    this._modelo = modelo;
    this._precio = precio;
  }

  marca() {
    return this._marca;
  }
  modelo() {
    return this._modelo;
  }
  precio() {
    return this._precio;
  }
};
