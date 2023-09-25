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

module.exports = buscarBinaria;