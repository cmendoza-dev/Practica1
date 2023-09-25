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

module.exports = ordenarPorBurbuja;