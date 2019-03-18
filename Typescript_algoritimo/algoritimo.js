var Carro = (function () {
    function Carro(placa) {
        this.placa = placa;
    }
    Carro.prototype.mostrarPlaca = function () {
        console.log(this.placa);
    };
    return Carro;
}());
var meucarro = new Carro("MinhaPlaca");
meucarro.mostrarPlaca();
