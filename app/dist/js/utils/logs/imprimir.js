export function imprimir(...objetos) {
    for (let objeto of objetos) {
        console.log(`[Utils][Imprimir]: `, objeto.paraTexto());
    }
}
