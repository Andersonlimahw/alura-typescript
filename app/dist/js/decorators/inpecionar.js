export function inspecionar() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`[Decorator][inspecionar]: target ${target}`);
            console.log(`[Decorator][inspecionar]: método ${propertyKey}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`[Decorator][inspecionar]: parametros ${args}`);
            console.log(`[Decorator][inspecionar]: retorno ${retorno}`);
            return retorno;
        };
        return descriptor;
    };
}
