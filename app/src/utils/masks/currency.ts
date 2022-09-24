interface FormatCurrencyInput {
    money: number;
}
export const formatCurrency = ({ money } : FormatCurrencyInput) : string => {
    return new Intl.NumberFormat().format(money);
}