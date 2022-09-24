export function domInjector(selector) {
    return function (target, propertyKey) {
        const getter = function () {
            const elemento = document.querySelector(selector);
            console.log(`[Decorator][domInjector]: 
            selector: ${selector}, 
            injectar em propertyKey: ${propertyKey}
        `);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
