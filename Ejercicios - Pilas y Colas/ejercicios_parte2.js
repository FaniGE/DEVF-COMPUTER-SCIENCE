// 5.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y 
// alternando a partir de su índice. los pares en una y los nones en otra 


//Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
//Cola 1: [ amarillo, rojo, azul, morado]
//Cola 2: [rosa, verde, negro, blanco]


function dividir(cola){
    var cola1 = [];
    var cola2 = [];
    for(var i = 0; i < cola.length; i++){
        if(i % 2 == 0){
            cola1.push(cola[i]);
        }else{
            cola2.push(cola[i]);
        }
    }
    return [cola1, cola2];
}

console.log(dividir(["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"]));


 
// 6.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, 
// llegada la hora de inicio hay muchos "colados", es por esto que se le ordena al vigilante que retire 
// a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
 
/*Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.*/
 
var Cola= [
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
    ];

    
//hacer una funcion que reciba una cola retirar los elementos cuyo ticket sea igual a false
function retirar(cola){
    var cola_final = [];
    for(var i = 0; i < cola.length; i++){
        if(cola[i].ticket == true){
            cola_final.push(cola[i]);
        }
    }
    return cola_final;
}
console.log(retirar(Cola));