//import persona from './persona.js';

class persona{
    //Atributos
    constructor(nombre){
        this.nombre = nombre;
        this.participacion = true;
    }
}

const persona1 =  new persona ("Eric");
const persona2 =  new persona ("Shere");
const persona3 =  new persona ("Thirza");
const persona4 =  new persona ("Aitor");
const persona5 =  new persona ("Sara");
const persona6 =  new persona ("Alex");
const persona7 =  new persona ("Sergio");
const persona8 =  new persona ("Sergi");
const persona9 =  new persona ("David");
const persona10 =  new persona ("Albert");
const persona11 =  new persona ("Moha");
const persona12 =  new persona ("Adri");

const concursantes = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9, persona10, persona11, persona12];
const muertos = [];

console.log(concursantes);

function eliminar(){
    const indiceAleatorio = 11;
    const numeroAleatorio = Math.floor(Math.random() * indiceAleatorio);
    for (let i = 0; i < concursantes.length; i++){
        if (concursantes[i].participacion){ // Aqui miramos si participa o no, entra el TRUE
            if (concursantes[i] == concursantes[numeroAleatorio]){//Llamamos a al aleatorio para comparar 
                concursantes[i].participacion = false; // lo matamos
                muertos.push(concursantes[i]); // lo metemos en array de muertos
                indiceAleatorio--; // rebajamos las posibilidades
                concursantes.splice(i,1);
            }
        }
    }
}

eliminar();
console.log(muertos);