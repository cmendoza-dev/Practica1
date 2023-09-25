// Función de búsqueda lineal
function buscarLineal(numeros, numeroBuscado) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numeroBuscado) {
            return `El número ${numeroBuscado} se encuentra en la posición ${i}`;
        }
    }
    return `El número ${numeroBuscado} no se encontró en la lista.`;
}
module.exports = buscarLineal;