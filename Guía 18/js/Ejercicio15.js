/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

let area = {
  PI: 0,
  radio: 0,
  area: 0,
  perimetro: 0,
  calcularAreaYPerimetro: function () {
    this.PI = Math.PI;
    this.radio = prompt("Ingrese el radio.");
    this.area = this.PI * Math.pow(this.radio, 2);
    this.perimetro = 2 * this.PI * this.radio;
  },
  mostrarDatos: function () {
    console.log(
      `El área del círculo es ${this.area} y el perímetro es ${this.perimetro}.`
    );
    document.write(
      `El área del círculo es ${this.area} y el perímetro es ${this.perimetro}.`
    );
  },
};

area.calcularAreaYPerimetro();
area.mostrarDatos();
