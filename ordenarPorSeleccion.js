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

module.exports = ordenarPorSeleccion; 