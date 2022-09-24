export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);
        if(typeof retorno === 'string') {
            const exp = /<script>[\s\S]*?<script>/;
            retorno = retorno.replace(exp, '');
        }
        return retorno;
    }
    return descriptor;
}