const readline = require('readline');

// Crear una interfaz para leer y escribir desde/hacia la consola
const rl = readline.createInterface({
    input: process.stdin,   // Leer desde la entrada estándar (teclado)
    output: process.stdout  // Escribir en la salida estándar (consola)
});

// Función para ordenar por selección
function ordenarPorSeleccion(numeros) {
    for (let i = 0; i < numeros.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[j] < numeros[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [numeros[i], numeros[minIndex]] = [numeros[minIndex], numeros[i]];
        }
    }
    return numeros;
}

// Función para ordenar por burbuja
function ordenarPorBurbuja(numeros) {
    let n = numeros.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
        }
    }
    return numeros;
}

// Función de búsqueda lineal
function buscarLineal(numeros, numeroBuscado) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numeroBuscado) {
            return `El número ${numeroBuscado} se encuentra en la posición ${i}`;
        }
    }
    return `El número ${numeroBuscado} no se encontró en la lista.`;
}

// Función de búsqueda binaria (requiere que la lista esté ordenada)
function buscarBinaria(numeros, numeroBuscado) {
    let inicio = 0;
    let fin = numeros.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (numeros[medio] === numeroBuscado) {
            return `El número ${numeroBuscado} se encuentra en la posición ${medio}`;
        } else if (numeros[medio] < numeroBuscado) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return `El número ${numeroBuscado} no se encontró en la lista.`;
}

// Función principal para obtener números y opciones de ordenamiento
function obtenerNumeros() {
    rl.question('Ingresa los números separados por espacios (o "q" para salir): ', (input) => {
        if (input.toLowerCase() === 'q') {
            rl.close(); // Si el usuario ingresa "q", cerrar la interfaz de readline
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
