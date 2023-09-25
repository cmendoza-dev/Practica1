
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];

function ordenarPorSeleccion(numeros) {
    // Tu código de ordenamiento por selección aquí
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

function ordenarPorBurbuja(numeros) {
    // Tu código de ordenamiento por burbuja aquí
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

function buscarLineal(numeros, numeroBuscado) {
    // Tu código de búsqueda lineal aquí
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numeroBuscado) {
            return `El número ${numeroBuscado} se encuentra en la posición ${i} (Búsqueda Lineal)`;
        }
    }
    return `El número ${numeroBuscado} no se encontró en la lista (Búsqueda Lineal).`;
}

function buscarBinaria(numeros, numeroBuscado) {
    // Declaración de una función llamada buscarBinaria que toma dos argumentos: una matriz ordenada (numeros) y un número a buscar (numeroBuscado).
    
    let inicio = 0;
    let fin = numeros.length - 1;
    // Inicializa dos variables, "inicio" al principio del arreglo (índice 0) y "fin" al final del arreglo (índice numeros.length - 1).

    while (inicio <= fin) {
        // Comienza un bucle while que se ejecuta mientras "inicio" sea menor o igual que "fin". Esto asegura que sigamos buscando hasta que "inicio" se cruce con "fin".

        let medio = Math.floor((inicio + fin) / 2);
        // Calcula el índice medio del arreglo utilizando la fórmula (inicio + fin) / 2 y redondeando hacia abajo con Math.floor(). Esto divide la lista en dos mitades aproximadamente iguales.

        if (numeros[medio] === numeroBuscado) {
            // Comprueba si el elemento en la posición "medio" de la lista es igual al número que estamos buscando.
            return `El número ${numeroBuscado} se encuentra en la posición ${medio} (Búsqueda Binaria)`;
            // Si el número se encuentra en la posición "medio", se devuelve un mensaje indicando la posición en la que se encontró.
        } else if (numeros[medio] < numeroBuscado) {
            // Si el número en la posición "medio" es menor que el número buscado, actualizamos "inicio" para buscar en la mitad derecha de la lista.
            inicio = medio + 1;
        } else {
            // Si el número en la posición "medio" es mayor que el número buscado, actualizamos "fin" para buscar en la mitad izquierda de la lista.
            fin = medio - 1;
        }
    }

    // Si el bucle while termina sin encontrar el número, se devuelve un mensaje indicando que el número no se encontró en la lista.
    return `El número ${numeroBuscado} no se encontró en la lista (Búsqueda Binaria).`;
}


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
