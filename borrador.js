const readline = require('readline');

// Crear una interfaz para leer y escribir desde/hacia la consola
const rl = readline.createInterface({
    input: process.stdin,   // Leer desde la entrada estándar (teclado)
    output: process.stdout  // Escribir en la salida estándar (consola)
});

//  funciona iterando sobre la lista, encuentra el elemento más pequeño y lo mueve al inicio de la lista.
function ordenarPorSeleccion(numeros) {
    // Iterar a través de toda la lista (excepto el último elemento)
    for (let i = 0; i < numeros.length - 1; i++) {
        // Suponemos que el elemento actual es el mínimo
        let minIndex = i;

        // Buscamos el elemento más pequeño a partir del elemento actual
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[j] < numeros[minIndex]) {
                // Si encontramos un elemento más pequeño, actualizamos minIndex
                minIndex = j;
            }
        }

        // Si minIndex no es igual a i, significa que encontramos un elemento más pequeño
        // y lo intercambiamos con el elemento en la posición i
        if (minIndex !== i) {
            [numeros[i], numeros[minIndex]] = [numeros[minIndex], numeros[i]];
        }
    }
    return numeros; // Devolvemos la lista ordenada
}


// funciona comparando pares de elementos adyacentes y los intercambia si están en el orden incorrecto
function ordenarPorBurbuja(numeros) {
    let n = numeros.length; // Almacenamos la longitud del arreglo en la variable n

    // Primer bucle, itera a través de todos los elementos del arreglo excepto el último
    for (let i = 0; i < n - 1; i++) {

        // Segundo bucle, compara los pares de elementos adyacentes
        for (let j = 0; j < n - i - 1; j++) {

            // Si el elemento actual es mayor que el siguiente
            if (numeros[j] > numeros[j + 1]) {
                // Intercambiamos los elementos utilizando la desestructuración de arreglos
                [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
            }
        }
    }

    return numeros; // Devolvemos el arreglo ordenado
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

            obtenerNumeros(); // Llamar de nuevo a la función para continuar obteniendo números y opciones
        });
    });
}

obtenerNumeros(); // Iniciar el proceso de obtención y ordenamiento de números
