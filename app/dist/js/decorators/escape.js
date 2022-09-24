export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            const exp = /<script>[\s\S]*?<script>/;
            retorno = retorno.replace(exp, '');
        }
        return retorno;
    };
    return descriptor;
}
