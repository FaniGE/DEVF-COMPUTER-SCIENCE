//Hacer una función que reciba como parámetros una pila, y un número.La función debe retornar tantos elementos como diga el número (segundo parámetro).
function mifuncion(pila, numero){
    var pila2 = [];
    for(var i = 0; i < numero; i++){
        pila2.push(pila.pop());
    }
    return pila2;
}
console.log(mifuncion(['Manzana','Cebolla','Apio','Naranja','Papaya','Sandía','Melón'],4));


//Write a "replace" function that has as parameters a stack of elements of type Number and two values also of type Number "new" and "old", so that if the second value appears somewhere on the stack, it is replaced by the first (Only the first time), and it will pop the newest elements.
//input: replace([3,2,3,4,6,8,1,2,5,5], 7, 2)
//output: [3,2,3,4,6,8,1,7]
function reemplazar(pila, nuevo, viejo){
    let ultima_coincidencia = pila.lastIndexOf(viejo);
    let elementos_a_quitar = (pila.length-1)-ultima_coincidencia;
    var pila2 = [];
    for(var i = 0; i < pila.length; i++){
        if(pila[i] == viejo && i == ultima_coincidencia){
            pila2.push(nuevo);
        }else{
            pila2.push(pila[i]);
        }
    }
    for(var i=0; i < elementos_a_quitar; i++){
        pila2.pop();
    }
    return pila2;
}
console.log(reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2));

// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta. 
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2 → pueblo 1 → Pueblo Origen
function mi_recorrido(pila){
    let recorrido = '';
    let regreso = '';
    var pila2 = [];
    for(var i = 0; i < pila.length; i++){
        if(i < pila.length-1){
          recorrido += pila[i]+" → ";
        }else{
            recorrido += pila[i];
        }
  
        pila2.unshift(pila[i]);
       
    }
    
        for(var i = 0; i < pila2.length; i++){
        if(i < pila2.length-1){
          regreso += pila2[i]+" → ";
        }else{
            regreso += pila2[i];
        }
       
    }
    return [{Recorrido:recorrido},{Regreso:regreso}];
    //return pila2;
}
console.log(mi_recorrido(['Pueblo Origen','pueblo 1','pueblo 2','destino']));

// 4.- Un almacén tiene capacidad para apilar "n" contenedores. Cada contenedor tiene un número de 
// identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los 
// contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.

function almacen(pila, contenedor) {
    var pila2 = [];
    var lugar_contenedor = pila.indexOf(contenedor)+1;
    for(var i = 0; i < pila.length; i++){
        if(pila[i] != contenedor && i <= lugar_contenedor){
            if(i !==lugar_contenedor){
            pila2.push(pila.shift());
            }else{
            pila.shift();
            }
            
          
        }
    }
    for(var i=(pila2.length-1);i>=0;i--){
    pila.unshift(pila2[i]);
    }
    
    return pila;
}
console.log(almacen([1,2,3,4,5,6,7,8,9,10], 5));

