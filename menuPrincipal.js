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

// Función principal para obtener números y opciones de ordenamiento
function obtenerNumeros() {
    rl.question('Ingresa los números separados por espacios (o "q" para salir): ', (input) => {
        if (input.toLowerCase() === 'q') {
            rl.close(); // Si el usuario ingresa "q", ceñ000rrar la interfaz de readline
            return;
        }

        const numeros = input.split(' ').map(Number); // Convertir los números a un array de números

        rl.question('Elige una opción:\n1. Ordenar por selección\n2. Ordenar por burbuja\nOpción: ', (opcion) => {
            let resultado;

            switch (opcion) {
                case '1':
                    resultado = ordenarPorSeleccion(numeros);
                    break;
                case '2':
                    resultado = ordenarPorBurbuja(numeros);
                    break;
                default:
                    console.error('Opción no válida');
            }

            if (resultado) {
                console.log(`Resultado: ${resultado.join(', ')}`);
            }

            // Después de ordenar, permite al usuario buscar un número
            rl.question('Ingresa un número para buscar: ', (numeroBuscado) => {
                const num = Number(numeroBuscado);
                if (!isNaN(num)) {
                    // Puedes llamar a la función de búsqueda aquí
                    const resultadoBusqueda = buscarLineal(resultado, num);
                    console.log(resultadoBusqueda);
                } else {
                    console.error('Entrada no válida para búsqueda.');
                }
                rl.close();
            });
        });
    });
}

obtenerNumeros(); // Iniciar el proceso de obtención y ordenamiento de números
