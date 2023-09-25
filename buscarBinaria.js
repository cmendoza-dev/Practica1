// Función de búsqueda binaria (requiere que la lista esté ordenada)
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

module.exports = buscarBinaria;