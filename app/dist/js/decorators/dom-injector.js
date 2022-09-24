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
        let _elemento;
        const getterCached = function () {
            if (!_elemento) {
                _elemento = document.querySelector(selector);
            }
            console.log(`[Decorator][domInjector]: 
            buscando selector: ${selector}, para
            injectar em propertyKey: ${propertyKey}
        `);
            return _elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getterCached });
    };
}
