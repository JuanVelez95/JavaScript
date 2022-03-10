/*
----------
EJECICIO 1
----------

let edad = parseInt(prompt(`¡Ingrese su edad!`));
edad += 1;
alert(`Tu edad el año que viene es de ${edad} años`);

-----------
EJERCICIO 2
-----------

let precio_manzana = 2;
let kilos_manzana = parseInt(prompt(`¿Cuantos kilos de manzana ha comprado?`));
let precio_naranja = 2.5;
let kilos_naranja = parseInt(prompt(`¿Cuantos kilos de naranja ha comprado?`));
let precio_platano = 1.75;
let kilos_platano = parseInt(prompt(`¿Cuantos kilos de platano ha comprado?`));
let compra = 0;
compra += precio_manzana * kilos_manzana;
compra += precio_naranja * kilos_naranja;
compra += precio_platano * kilos_platano;
let oferta = 0.08;
let descuento = compra * oferta;
compra -= descuento;
alert(`El precio de su compra es de: ${compra} Euros`);

-----------
EJERCICIO 3
-----------

let diaSemana = prompt(`¿Que día de la semana es hoy?`);
if (diaSemana == `sabado` || diaSemana == `domingo`) {
    alert(`Es Festivo`);
} else {
    alert(`Es Laboral`);
}

-----------
EJERCICIO 4
-----------

let nombrePersonaUno = prompt(`¿Como es tu nombre?`);
let edadPersonaUno = parseInt(prompt(`¿Cual es tu edad?`));
let nombrePersonaDos = prompt(`¿Como es tu nombre?`);
let edadPersonaDos = parseInt(prompt(`¿Cual es tu edad?`));
if (edadPersonaUno == edadPersonaDos) {
    alert(`¡Ambas personas tienen la misma edad!`);
} else if (edadPersonaUno > edadPersonaDos) {
    alert(`${nombrePersonaUno} es mayor que ${nombrePersonaDos}`);
} else if (edadPersonaUno < edadPersonaDos) {
    alert(`${nombrePersonaDos} es mayor que ${nombrePersonaUno}`);
}

-----------
EJERCICIO 5
-----------

let nombre = prompt(`¿Cual es tu nombre?`);
let contraseña = prompt(`¿Cual es tu contraseña?`);
if (nombre == `Roger` && contraseña == `CIPSA`){
    alert(`Bienvenido ${nombre}`);
} else if (nombre != `Roger` && contraseña == `CIPSA`) {
    alert(`Usuario no reconocido`);
} else if (nombre == `Roger` && contraseña != `CIPSA`) {
    alert(`Contraseña incorrecta`);
} else {
    alert(`Página no encontrada`);
}

-----------
EJERCICIO 6
-----------

let mes = prompt(`¿Que mes es este?`);
let dia = parseInt(prompt(`¿Que día es hoy?`));
if (mes == `diciembre` && dia == 25) {
    alert(`Es Navidad`);
} else {
    alert(`Hoy es ${dia} de ${mes}`);
}

-----------
EJERCICIO 7
-----------

let numero = prompt(`ingrese su número`);
if (numero%2 == 0) {
    alert(`El número es par`);
} else {
    alert(`El número es impar`);
}

-----------
EJERCICIO 8
-----------

let numeroPreguntas = parseInt(prompt(`¿Cuantas preguntas hay en el test?`));
let nota = parseInt(prompt(`¿Cuantas ha contestado correctamente?`));
if (numeroPreguntas >= nota) {
    if (nota <= 2) {
        alert(`Su nota es: Muy deficiente`);
    }
    else if (nota > 2 && nota <= 5) {
        alert(`Su nota es: Insuficiente`);
    }
    else if (nota > 5 && nota <= 6) {
        alert(`Su nota es: Suficiente`);
    }
    else if (nota > 6 && nota <= 7) {
        alert(`Su nota es: Bien`);
    }
    else if (nota > 7 && nota <= 9) {
        alert(`Su nota es: Notable`);
    }
    else if (nota > 9 && nota <= 10) {
        alert(`Su nota es: Sobresaliente`);
    }
    else {
        alert(`Datos incorrectos`);
    }
} else {
    alert(`Los datos introducidos no son validos`);
}

-----------
EJERCICIO 9
-----------

let name1 = prompt(`¿cual es su nombre?`);
let age1 = parseInt(prompt(`¿cual es su edad?`));
let name2 = prompt(`¿cual es su nombre?`);
let age2 = parseInt(prompt(`¿cual es su edad?`));
let name3 = prompt(`¿cual es su nombre?`);
let age3 = parseInt(prompt(`¿cual es su edad?`));
if (age1 == age2 && age1 == age3) {
    alert(`${name1} ${name2} ${name3} tienen la misma edad`);
} else {
    if (age1 > age2 && age1 > age3) {
        if (age2 > age3) {
            alert(`${name1} es el/la mayor y ${name3} es el/la menor`);
        } else {
            alert(`${name1} es el/la mayor y ${name2} es el/la menor`);
        }
    } else if (age2 > age1 && age2 > age3) {
        if (age1 > age3) {
            alert(`${name2} es el/la mayor y ${name3} es el/la menor`);
        } else {
            alert(`${name2} es el/la mayor y ${name1} es el/la menor`);
        }
    } else if (age3 > age1 && age3 > age2) {
        if (age1 > age2) {
            alert(`${name3} es el/la mayor y ${name2} es el/la menor`);
        } else {
            alert(`${name3} es el/la mayor y ${name1} es el/la menor`);
        }
    }
}

------------
EJERCICIO 10
------------

let nombre = prompt(`ingrese su nombre`);
if (nombre == null || nombre == "") {
    alert(`usuario anonimo`);
} else {
    alert(`Encantado de conocerte, ${nombre}`);
}

----------
EJECICIO 11
----------

let operacion = parseInt(prompt(`Indique operación a realizar: 1) suma, 2) resta, 3) division, 4) multiplicación`));
let num1 = parseInt(prompt(`Introduzca su primer número`));
let num2 = parseInt(prompt(`Introduzca su segundo número`));
switch (operacion) {
    case 1:
        alert(num1 + num2)
        break;
    case 2:
        alert(num1 - num2)
        break;
    case 3:
        if (num2 == 0) {
            alert(`Division por cero`);
        } else {
            alert(num1 / num2)
        }
        break;
    case 4:
        alert(num1 * num2)
        break;
    default:
        alert(`operación no válida`);
}

------------
EJERCICIO 12
------------

let numero = 100;
//(for)
for (numero = 100; numero >= 0; numero--, numero--) {
    document.write(numero + "<br> ");
}
//(while)
while (numero >= 0) {
    document.write(numero + "<br>");
    numero--;
    numero--;
}
//(do while)
do {
    document.write(numero + "<br>");
    numero--;
    numero--;
}
while (numero >= 0);

------------
EJERCICIO 13
------------

let numero = prompt(`ingrese un número`);
while(isNaN(numero)){
    alert(`ERROR`);
    numero = prompt(`ingrese un número`);
}

------------
EJERCICIO 14
------------

let pregunta = true;
let valorTotal = 0;
let cantValores = 0;
while (pregunta == true) {
    valor = parseInt(prompt(`ingrese un valor`));
    document.write(valor + "<br>");
    valorTotal += valor;
    cantValores += 1;
    let confirmacion = confirm(`¿Desea continar?`);
    if (confirmacion == false) {
        pregunta = false
    }
}
document.write("Su media es de: " + (valorTotal / cantValores));

------------
EJERCICIO 15
------------

function multiplicacion() {
    let numero = parseInt(prompt("Indique un numero del 1 al 10"));
    let tabla = 1;
    let acierto = 0;
    do {
        let newNumero = parseInt(prompt(`${numero} * ${tabla}`));
        let resultado = numero * tabla;
        if (newNumero == resultado) {
            alert("CORRECTO");
            acierto++;
        }
        else {
            alert("El resultado es " + resultado);
        }
        tabla++;
    }
    while (tabla <= 10);
    document.write("El porcentaje de aciertos es del " + ((acierto * 100) / 10) + "%")
}
multiplicacion();

------------
EJERCICIO 16
------------

function esPar(num1) {
    let num1 = parseInt(prompt(`Ingrese su número`));
    if (num1 % 2 == 0) {
        return alert(`tu número es par`);
    }
    else {
        return alert(`tu número es impar`);
    }
}
esPar();

------------
EJERCICIO 17
------------

let num1 = parseInt(prompt(`Indique su primer número`));
let num2 = parseInt(prompt(`Indique su segundo número`));
function enumerador(num1,num2){
    if (num1 < num2) {
        for (i = (num1 + 1); i < num2; i++){
            document.write(i + "<br>");
        }
    } else {
        for (i = (num2 + 1); i < num1; i++){
            document.write(i + "<br>");
        }
    }
}
enumerador(num1,num2);

------------
EJERCICIO 18
------------

function calcular(a, b, op) {
    if (op == 1) {
        document.write(a + b);
    } else if (op == 2) {
        document.write(a - b);
    } else if (op == 3) {
        document.write(a * b);
    } else if (op == 4) {
        document.write(a / b);
    } else {
        alert("Operación no reconocida");
    }
}
calcular(10, 2, 3);

------------
EJERCICIO 18
------------

function mostrarTabla(v1) {
    document.write(`<table>` + `<tr><td>Su numero</td>` + `<td>Tabla</td>` + `<td>Resultado</td></tr>`);
    for (i = 1; i <= 10; i++) {
        document.write(`<tr><td>` + v1 + "</td>" + "<td>" + i + "</td>" + `<td>` + v1 * i + `</td></tr>`)
    }
}
mostrarTabla(8);

------------
EJERCICIO 19
------------

function buscar(v1, v2) {
    let resultado = parseInt(prompt("Ingrese un valor"));
    if (resultado >= v1 && resultado <= v2) {
        alert("Tu número se encuentra dentro de lo parámetros");
    } else if (resultado <= v1 && resultado >= v2) {
        alert("Tu número se encuentra dentro de lo parámetros");
    } else {
        buscar(v1, v2);
    }
}
buscar(1, 10);

*/