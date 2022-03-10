/*
-----------
EJERCICIO 1
-----------

function usuario(_usuario, _clave) {
    this.usuario = _usuario;
    this.clave = _clave;
    this.comprobarUsuario = function (_usu, _cla) {
        if (this.usuario == _usu && this.clave == _cla) {
            return true;
        } else {
            return false;
        }
    }
}
let usuario1 = new usuario("roger", "1234");
function login() {
    let user1 = prompt("Indique su usuario");
    let pass1 = prompt("Indique su clave");
    let comprobacion = usuario1.comprobarUsuario(user1, pass1);
    if (comprobacion == true) {
        alert("Bienvenido " + user1);
    } else {
        alert("Error");
        login();
    }
}
login();

-----------
EJERCICIO 2
-----------

function apuestaPrimitiva (v1,v2,v3,v4,v5,v6) {
    this.valor1 = v1;
    this.valor2 = v2;
    this.valor3 = v3;
    this.valor4 = v4;
    this.valor5 = v5;
    this.valor6 = v6;
    this.contarAciertos = function (num1,num2,num3,num4,num5,num6){
        let aciertos = 0;
        if (this.valor1 == num1) {
            aciertos++;
        }
        if (this.valor2 == num2) {
            aciertos++;
        }
        if (this.valor3 == num3) {
            aciertos++;
        }
        if (this.valor4 == num4) {
            aciertos++;
        }
        if (this.valor5 == num5) {
            aciertos++;
        }
        if (this.valor6 == num6) {
            aciertos++;
        }
        document.write("Ha tenido " + aciertos + " acierto/s.");
    }
}
let nuevaPrimitiva = new apuestaPrimitiva(5,20,55,10,30,1);
let num1 = prompt("Primer numero");
let num2 = prompt("Segundo numero");
let num3 = prompt("Tercer numero");
let num4 = prompt("Cuarto numero");
let num5 = prompt("Quinto numero");
let num6 = prompt("Sexto numero");
let comprobacion = nuevaPrimitiva.contarAciertos(num1,num2,num3,num4,num5,num6);

-----------
EJERCICIO 3
-----------

function triangulo(lado1, lado2, lado3) {
    this.side1 = lado1;
    this.side2 = lado2;
    this.side3 = lado3;
    this.esEquilatero = function (side1, side2, side3) {
        if (side1 == side2 && side1 == side3) {
            document.write("tu triangulo es equilatero");
            return true;
        }
    }
    this.esIsosceles = function (side1, side2, side3) {
        if (side1 == side2 && side1 !== side3) {
            document.write("tu triangulo es isosceles");
            return true;
        } else if (side1 == side3 && side1 !== side2) {
            document.write("tu triangulo es isosceles");
            return true;
        } else if (side2 == side3 && side2 !== side1) {
            document.write("tu triangulo es isosceles");
            return true;
        }
    }
    this.esEscaleno = function (side1, side2, side3) {
        if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
            document.write("tu triangulo es escaleno");
            return true;
        }
    }
}
let ladoIzq = prompt("valor de lado 1");
let ladoDer = prompt("valor de lado 2");
let ladoAba = prompt("valor de lado 3");
let nuevoTriangulo = new triangulo(ladoIzq, ladoDer, ladoAba);
function consulta(datos) {
    let equilatero = datos.esEquilatero(ladoIzq, ladoDer, ladoAba);
    let isosceles = datos.esIsosceles(ladoIzq, ladoDer, ladoAba);
    let escaleno = datos.esEscaleno(ladoIzq, ladoDer, ladoAba);
}
consulta(nuevoTriangulo);

-----------
EJERCICIO 4
-----------

let socios = [];
function nuevoSocio(){
    let nombreSocio = prompt("Indique su nombre");
    socios.push(nombreSocio);
    let seguir = confirm("¿Desea agregar a alguien mas?");
    if (seguir == true) {
        nuevoSocio();
    }
}
nuevoSocio();
//tabla con nombres de los socios.
document.write(`<table style="border:solid 1px">`);
for (i = 0; i < socios.length; i++) {
    const pos = socios[i];
    document.write("<tr>");
    document.write(`<td style="border:solid 1px">` + pos + "</td>");
    document.write("</tr>");
}
document.write("</table>" + "<br>");
//tabla con nombres ordenados alfabeticamente
document.write(`<table style="border:solid 1px">`);
for (i= 0; i < socios.length; i++) {
    const pos = socios.sort()[i];
    document.write("<tr>");
    document.write(`<td style="border:solid 1px">` + pos + "</td>");
    document.write("</tr>");
}
document.write("</table>" + "<br>");
//total de socios introducidos
document.write("Han ingresado un total de: " + socios.length + " socios.");

-----------
EJERCICIO 5
-----------

let alumnos = [];
let alumnosTotales = parseInt(prompt("¿Cuántos alumnos presentes hay?"));
//crear alumnos
function alumnosEnAula() {
    for (i = 0; i < alumnosTotales; i++) {
        let alumno = {};
        alumno.nombre = prompt("Indique su nombre");
        alumno.nota = parseInt(prompt("Indique su calificación final"));
        alumnos.push(alumno);
    }
}
alumnosEnAula();
//sacar promedio
function porcentaje(alumnos) {
    let suma = 0;
    for (let alumno of alumnos) {
        suma += alumno.nota;
    }
    let promedio = suma / alumnosTotales;
    document.write("El promedio de notas de los alumnos presentes es de: " + promedio + "<br>");
}
porcentaje(alumnos);
//sacar mejor/es alumno/s
function mejorPromedio (alumnos) {
    let  mejorNota = {nombre: "", nota: 0};
    for (let alumno of alumnos) {
        if (alumno.nota > mejorNota.nota) {
            mejorNota = alumno;
            }
        }
    let iguales = [];
    for (let igual of alumnos) {
        if (igual.nota == mejorNota.nota) {
            iguales.push(igual);
            document.write("El/los alumno/s con mejor nota es/son: " + (`<b>${igual.nombre}</b>`) + " con una nota de: " + (`<b>${igual.nota}</b>`) + "<br>");
        }
    }
}
mejorPromedio(alumnos);

-----------
EJERCICIO 6
-----------

//total de meses y precipitaciones
let totalPrecip = [];
function agregarPrecip() {
    let precipitacion = {};
    precipitacion.mes = prompt("¿Que mes es?");
    precipitacion.precipitaciones = parseInt(prompt("¿De cuanto fueron las precipitaciones?"));
    totalPrecip.push(precipitacion);
    let siguiente = confirm("¿Desea agregar otra precipitación?");
    if (siguiente == true) {
        agregarPrecip();
    }
}
agregarPrecip();
//reducir los meses que son iguales y sumar las precipitaciones
function mesesIguales(totalPrecip) {
    let obj = {};
    for (const i of totalPrecip) {
        if (obj[i.mes]) {
            obj[i.mes] = {
                ...obj[i.mes], precipitaciones: obj[i.mes].precipitaciones + i.precipitaciones
            }
        } else {
            obj[i.mes] = {
                ...i
            }
        }
    }
    return Object.values(obj);
}
const total = mesesIguales(totalPrecip);
//mostrar en una tabla los meses con su respectiva precipitacion acumulada
document.write("<table>");
document.write("<tr>" + "<td>Mes</td>" + "<td>Persepciones</td>" + "</tr>");
for (i = 0; i < total.length; i++) {
    document.write("<tr>" + `<td>${total[i].mes}</td>` + `<td>${total[i].precipitaciones}</td>` + "</tr>");
}
document.write("</table>");
*/