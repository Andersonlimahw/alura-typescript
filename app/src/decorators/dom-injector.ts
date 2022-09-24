export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    // sempre que a propriedade é acessada o funcao de getter é executada.
    // acessando o dom novamente
    const getter = function() {
        const elemento =  document.querySelector(selector);
        console.log(`[Decorator][domInjector]: 
            selector: ${selector}, 
            injectar em propertyKey: ${propertyKey}
        `);
        return elemento;
    }

    let _elemento : HTMLElement;
    // sempre que a propriedade é acessada o funcao de getter é executada.
    // memorizando o DOM
    const getterCached = function() {
        if(!_elemento) {
            _elemento = <HTMLElement>document.querySelector(selector);
        }
        console.log(`[Decorator][domInjector]: 
            buscando selector: ${selector}, para
            injectar em propertyKey: ${propertyKey}
        `);
        return _elemento;
    }


    Object.defineProperty(
        target, 
        propertyKey, 
        { get: getterCached });
    };
}

// Decorator para utilizar em propriedades.
// Neste momento n temos acesso a instancia da classe
// Apenas ao prototype
