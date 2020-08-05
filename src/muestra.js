module.exports = class Muestra {
  constructor() {}

  agregarVehiculos(vehiculos) {
    this.vehiculos = vehiculos;
  }

  mostrarVehiculos() {
    this.vehiculos.forEach((v) => console.log(v.mostrar()));
  }

  mayorPrecio() {
    this.vehiculos.sort((a, b) => {
      return b._precio - a._precio;
    });
    console.log(
      "Vehículo más caro: " +
        this.vehiculos[0].marca() +
        " " +
        this.vehiculos[0].modelo()
    );
  }

  menorPrecio() {
    this.vehiculos.sort((a, b) => {
      return b._precio - a._precio;
    });
    console.log(
      "Vehículo más barato: " +
        this.vehiculos[this.vehiculos.length - 1].marca() +
        " " +
        this.vehiculos[this.vehiculos.length - 1].modelo()
    );
  }

  filtro(string) {
    var regEx = new RegExp(string, "i");
    this.vehiculos.forEach((v) => {
      if (regEx.test(v._modelo)) {
        console.log(
          "Vehículo que contiene en el modelo la letra ‘" +
            string +
            "’: " +
            v.marca() +
            " " +
            v.modelo() +
            " $" +
            v
              .precio()
              .toFixed(2)
              .replace(".", ",")
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        );
      }
    });
  }

  ordenarPorPrecio() {
    console.log("Vehículos ordenados por precio de mayor a menor:");
    this.vehiculos
      .sort((a, b) => {
        return b._precio - a._precio;
      })
      .forEach((v) => console.log(v.marca() + " " + v.modelo()));
  }
};
