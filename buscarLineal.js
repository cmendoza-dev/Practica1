// Función de búsqueda lineal
function buscarLineal(numeros, numeroBuscado) {
    // Tu código de búsqueda lineal aquí
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numeroBuscado) {
            return `El número ${numeroBuscado} se encuentra en la posición ${i} (Búsqueda Lineal)`;
        }
    }
    return `El número ${numeroBuscado} no se encontró en la lista (Búsqueda Lineal).`;
}
module.exports = buscarLineal;