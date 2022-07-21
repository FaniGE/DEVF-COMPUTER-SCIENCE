/*1. Crear un array llamado meses y que almacene el nombre de los doce meses del año.  
Mostrar por pantalla los doce nombres utilizando la función console.log().*/
const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
];
alert('Estos son los meses del año: ');
alert(meses[0]);
alert(meses[1]);
alert(meses[2]);
alert(meses[3]);
alert(meses[4]);
alert(meses[5]);
alert(meses[6]);
alert(meses[7]);
alert(meses[8]);
alert(meses[9]);
alert(meses[10]);
alert(meses[11]);
console.log('Estos son los meses del año: '+ meses);

//Ejercicio 1: Una mejor forma de usar forEach
const mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
mes.forEach(element => console.log(element));

/*2. Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.*/
function parImpar(numero){
    var message = '';
    if(numero%2 == 0){
    message = 'El número '+numero+' es par';
    }else {
     message = 'El número '+numero+' es impar';
    }
    return message;
 }
 alert(parImpar(parseInt(prompt('Ingresar un número'))));


/*3. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.*/
function texto(cadenaTexto) {
    var resultado = 'La cadena '+cadenaTexto+' ';
    // Check upper and lower case
    if(cadenaTexto == cadenaTexto.toUpperCase) {
        resultado += ' está formada solo por mayúsculas';
    } else if(cadenaTexto == cadenaTexto.toLowerCase) {
        resultado += ' está formada solo por minúsculas' ;
    } else {
        resultado += ' está formada por mayúsculas y minúsculas';
    }
    return resultado;
}
var oracion = prompt("Escribe una oración")
console.log(texto(oracion));


/*4. El factorial de un número entero n es una operación matemática que consiste en multiplicar
todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120 
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.*/
function ejercicio4(number){
    if(number < 0){
        return "Ingrese un número mayor a cero";
    }
    /* check if number is a number*/
     else if(isNaN(number)){
        return "Ingrese un número";
    }else{
        let factorial = 1
        for(let i = number; i > 0; i--){
            factorial *= i
        }
        return factorial;
    }
}
alert(ejercicio4(10));


/*5. Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee 
de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".*/
function verificar(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/\s*/g, ''); //Blanks, empty string
    return texto = texto.split('').reverse().join('') == texto;
  }
  console.log (verificar('La ruta nos aporto otro paso natural')); //true
  console.log (verificar('No es un palindromo')); //false
  console.log (verificar('Lavan esa base naval')); //true
  console.log (verificar('Ana lava lana')); //true
  console.log (verificar('Tengo hambre')); //false


/*6. Escribir una función que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener
números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados 
y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.*/
let resultados = [];
let resultados2 = [];
let aparicion_resultados = [];
function getUnique(array){
    var uniqueArray = [];
    
    // Loop through array values
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

function ejercicio5(){
    /*   let result1=Math.random(1,6);
       let result2=Math.random(1,6);*/
       let min = 1;
       let max = 6;
       let result1=Math.floor(Math.random()*(max-min+1)+min); 
       let result2=Math.floor(Math.random()*(max-min+1)+min); 
       let suma = result1 + result2;
         resultados.push(suma);
         resultados2.push(suma);
}
for(let i = 0; i < 36000; i++){
    ejercicio5();
}
//delete elements repeated in array
getUnique(resultados2);
for(let j = 0; j < resultados2.length; j++){
    let count =0;
    for(let i = 0; i < resultados.length; i++){
    //count number of times the element appears in the array
        if(resultados[i] == resultados2[j]){
            count++;
        }
    }
    aparicion_resultados.push({'resultado':resultados2[j], 'apariciones':count});
}
console.log(aparicion_resultados);
