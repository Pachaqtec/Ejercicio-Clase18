const alumnos = [
    {
        nombre: 'Juan',
        carrera: 'Biología',
        nota: 16
    },
    {
        nombre: 'Jose',
        carrera: 'Enfermero',
        nota: 10
    },
    {
        nombre: 'Luis',
        carrera: 'Policía',
        nota: 07
    },
    {
        nombre: 'Maria',
        carrera: 'Secretariado',
        nota: 10
    },
    {
        nombre: 'Hugo',
        carrera: 'Enfermero',
        nota: 15
    },
    {
        nombre: 'Rosa',
        carrera: 'Enfermero',
        nota: 12
    },
    {
        nombre: 'Luisa',
        carrera: 'Biología',
        nota: 18
    }
]

/*1) Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
    que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
    Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".

    2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.

    3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
    la nueva nota de los alumnos.
    */
let contarAprobados = 0;
let contarDesaprobados = 0;
let contarTodo = 0;
let promedioTotal = 0;
let sumaNotasTotales = 0;
let promedioAprobado = 0;
let sumaNotasAprobadas = 0;
let promedioDesaprobado = 0;
let sumaNotasDesaprobadas = 0;
let indiceAlumnos;
let nombreYCarrera = '';
alumnos.forEach(function ({ nombre, carrera, nota }) {
    contarTodo++;

    indiceAlumnos = contarTodo - 1;

    sumaNotasTotales += nota;
    promedioTotal = sumaNotasTotales / contarTodo;
    if (nota >= 13) {
        contarAprobados++;
        sumaNotasAprobadas += nota;
        promedioAprobado = sumaNotasAprobadas / contarAprobados;
    }
    if (nota < 13) {
        contarDesaprobados++;
        sumaNotasDesaprobadas += nota;
        promedioDesaprobado = sumaNotasDesaprobadas / contarDesaprobados;
    }
    if (indiceAlumnos % 2 === 0) {
        // nombreYCarrera = `Mi nombre es ${nombre} y mi carrera es ${carrera}`;
        console.log(`Mi nombre es ${nombre} y mi carrera es ${carrera}`);
        // nombreYCarrera += `Mi nombre es ${nombre} y mi carrera es ${carrera}`;
    }
})
//APROBADO
console.log("Aprobados: " + contarAprobados);
console.log("Promedio Aprobados: " + promedioAprobado);

//DESAPROBADOS
console.log("Desaprobados: " + contarAprobados);
console.log("Promedio Desaprobados: " + promedioDesaprobado);

//PROMEDIO TOTAL DE NOTAS
console.log("Promedio Total: " + promedioTotal);

//INDICE MULTIPLO 2
// console.log(nombreYCarrera);

let notaMenorA13 = alumnos.filter(n => n.nota < 13);

console.log(notaMenorA13)

let nuevoArray = alumnos.map(function ({ nota }) {
    let multiplicarporTres = nota * 3;
    let dividaEntreDosNota = multiplicarporTres / 2;
    return dividaEntreDosNota
})

console.log(nuevoArray)
