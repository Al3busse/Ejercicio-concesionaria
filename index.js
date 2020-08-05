const Muestra = require("./src/muestra");
const Moto = require("./src/motos");
const Auto = require("./src/autos");

const lista = [
  new Auto("Peugeot", "206", 200000, 4),
  new Moto("Honda", "Titan", 60000, 125),
  new Auto("Peugeot", "208", 250000, 5),
  new Moto("Yamaha", "YBR", 80500.5, 160),
];

let resultado = new Muestra(lista);

resultado.agregarVehiculos(lista);

resultado.mostrarVehiculos();
console.log("=============================");
resultado.mayorPrecio();
resultado.menorPrecio();
resultado.filtro("Y");
console.log("=============================");
resultado.ordenarPorPrecio();
