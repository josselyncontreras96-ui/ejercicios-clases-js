//ejercicio 1   ===========================================================

function saludar(nombre) {
  console.log("Hola " + nombre + ", este es el primer ejercicio de la clase 04");
}

saludar("Profe");
saludar("Ana");
saludar("Carlos");

// ejercicio 02 sumar  ========================================================

/*function sumar(num1, num2) {
  console.log("La suma es:", num1 + num2);
}

function restar(num1, num2) {
  console.log("La resta es:", num1 - num2);
}

let numero1 = Number(prompt("Ingresa el primer número"));
let numero2 = Number(prompt("Ingresa el segundo número"));

if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Error: debes ingresar números válidos");
} else {
  sumar(numero1, numero2);
  restar(numero1, numero2);
*/


// ejercicio 3  validar edad =========================================================

function validarEdad(edad) {
  if (edad >= 15) {
    return "Mayor";
  } else {
    return "Menor";
  }
}
console.log(validarEdad(18));
console.log(validarEdad(31));
console.log(validarEdad(15));

// ejercicio 4 funcion como parametro ===============================================

function ejecutarFuncion(funcion) {
  funcion();
}

ejecutarFuncion(() => {
  console.log("Ejecutando la función correctamente");
});


// ejercicio 5
/*
En mi opinión, las funciones sirven para ordenar mejor el código
y reutilizarlo sin tener que escribir lo mismo muchas veces.
Ayudan a que el programa sea más claro y fácil de entender.

La diferencia entre mostrar y devolver es que mostrar con console.log
solo sirve para ver el resultado en la consola,
mientras que devolver con return permite usar ese resultado
en otras partes del código.

La forma que me resultó más facil por asi decirlo, fue usar funciones simples con parámetros,
porque se entiende mejor qué información entra en la función
y qué resultado devuelve.
aunque al principio lo hago lento pero entiendole poco a poco
*/


