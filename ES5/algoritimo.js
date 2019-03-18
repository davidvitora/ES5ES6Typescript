//Este algiritimo irá criar um construtor de classes, 
// uma maneira diferente de fazer POO no javascript na epoca do ES5

var carro = function(placa) {
    return {
        mostrarPlaca: function(){
            console.log(placa)
        }
    }
}

var meucarro = carro("MinhaPlaca");
meucarro.mostrarPlaca(); // Minha Placa