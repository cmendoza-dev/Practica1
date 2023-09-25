const readline = require('readline');
const ordenarPorSeleccion = require('./ordenarPorSeleccion');
const ordenarPorBurbuja = require('./ordenarPorBurbuja');
const buscarBinaria = require('./buscarBinaria');
const buscarLineal = require('./buscarLineal');

// Crear una interfaz para leer y escribir desde/hacia la consola
const rl = readline.createInterface({
    input: process.stdin,   // Leer desde la entrada estándar (teclado)
    output: process.stdout  // Escribir en la salida estándar (consola)
});

let numeros = [];

// Función principal para obtener números y opciones de ordenamiento
function mostrarMenu() {
    console.log('Opciones:');
    console.log('1. Ingresar números');
    console.log('2. Ordenar por selección');
    console.log('3. Ordenar por burbuja');
    console.log('4. Buscar (Búsqueda Lineal)');
    console.log('5. Buscar (Búsqueda Binaria)');
    console.log('6. Salir');

    rl.question('Selecciona una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                rl.question('Ingresa los números separados por espacios: ', (input) => {
                    numeros = input.split(' ').map(Number);
                    console.log('Números ingresados:', numeros);
                    mostrarMenu();
                });
                break;
            case '2':
                if (numeros.length === 0) {
                    console.log('Debes ingresar números primero.');
                    mostrarMenu();
                } else {
                    const resultadoSeleccion = ordenarPorSeleccion([...numeros]);
                    console.log(`Resultado de ordenamiento por selección: ${resultadoSeleccion.join(', ')}`);
                    mostrarMenu();
                }
                break;
            case '3':
                if (numeros.length === 0) {
                    console.log('Debes ingresar números primero.');
                    mostrarMenu();
                } else {
                    const resultadoBurbuja = ordenarPorBurbuja([...numeros]);
                    console.log(`Resultado de ordenamiento por burbuja: ${resultadoBurbuja.join(', ')}`);
                    mostrarMenu();
                }
                break;
            case '4':
                if (numeros.length === 0) {
                    console.log('Debes ingresar números primero.');
                    mostrarMenu();
                } else {
                    rl.question('Ingresa un número para buscar (Búsqueda Lineal): ', (numeroBuscado) => {
                        const num = Number(numeroBuscado);
                        if (!isNaN(num)) {
                            const resultadoLineal = buscarLineal([...numeros], num);
                            console.log(resultadoLineal);
                        } else {
                            console.error('Entrada no válida para búsqueda.');
                        }
                        mostrarMenu();
                    });
                }
                break;
            case '5':
                if (numeros.length === 0) {
                    console.log('Debes ingresar números primero.');
                    mostrarMenu();
                } else {
                    rl.question('Ingresa un número para buscar (Búsqueda Binaria): ', (numeroBuscado) => {
                        const num = Number(numeroBuscado);
                        if (!isNaN(num)) {
                            // Ordenar la lista antes de realizar la búsqueda binaria
                            const listaOrdenada = ordenarPorSeleccion([...numeros]); // Usamos ordenarPorSeleccion, puedes cambiar a ordenarPorBurbuja si prefieres
                            const resultadoBinaria = buscarBinaria(listaOrdenada, num);
                            console.log(resultadoBinaria);
                        } else {
                            console.error('Entrada no válida para búsqueda.');
                        }
                        mostrarMenu();
                    });
                }
                break;
            case '6':
                rl.close();
                break;
            default:
                console.error('Opción no válida');
                mostrarMenu();
        }
    });
}

mostrarMenu();
// Iniciar el proceso de obtención y ordenamiento de números
