
export function logarTempoDeExecucao(emSegundos  : boolean = false) {
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args : Array<any>) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundos){
                divisor = 1000;
                unidade = 'segundos'
            }
            const tempoInicial = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const tempoFinal = performance.now();
            const tempoEmSegundos = (tempoFinal - tempoInicial) / divisor;
            console.log(`
                [Decorator][logarTempoDeExecucao]: ${propertyKey}, 
                Tempo: ${tempoEmSegundos} ${unidade}, 
                Target ${target}`);
            return retorno;
        }
        return descriptor;
    }
};