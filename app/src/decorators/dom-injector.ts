export function domInjector(selector: string) {
  return function (target: any, propertyKey: string) {
    const getter = function() {
        const elemento =  document.querySelector(selector);
        console.log(`[Decorator][domInjector]: 
            selector: ${selector}, 
            injectar em propertyKey: ${propertyKey}
        `);
        return elemento;
    }

    Object.defineProperty(
        target, 
        propertyKey, 
        { get: getter });
  };
}

// Decorator para utilizar em propriedades.
// Neste momento n temos acesso a instancia da classe
// Apenas ao prototype
