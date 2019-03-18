//Este algiritimo irá criar um construtor de classes, 
// uma maneira diferente de fazer POO no javascript na epoca do ES5

class Carro {
    placa: string;
    constructor(placa: string) {
        this.placa = placa;
    }

    mostrarPlaca(){
        console.log(this.placa)
    }
}

const meucarro = new Carro("MinhaPlaca");
meucarro.mostrarPlaca(); // Minha Placa