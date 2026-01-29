let edad = 18;
if (edad >= 18) {
  console.log("Puede Ingresar");
} else {
  console.log("No puede ingresar");
}

// ejercicio 2 par o impar

let numero = 30;
if (numero % 2 === 0) {
  console.log(numero + " es par");
} else {
  console.log(numero + " es impar");
}

// ejercicio 3 nota del alumno usar if/else if/else

let nota = 35;
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 60) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}

// ejercicio 4 (switch)

let dia = 5;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("No existe el día");
}

// ejercicio 5 ternario simple

let temperatura = 30;

temperatura < 20
  ? console.log("Hace frío")
  : console.log("Hace calor");




    


