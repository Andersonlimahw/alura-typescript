export function logarTempoDeExecucao() {
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args : Array<any>) {
            const tempoInicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempoFinal = performance.now();
            const tempoEmSegundos = (tempoFinal - tempoInicial) / 1000;
            console.log(`
                [Decorator][logarTempoDeExecucao]: ${propertyKey}, 
                Tempo: ${tempoEmSegundos}s, 
                retorno: ${retorno}`);
            return retorno;
        }
        return descriptor;
    }
};