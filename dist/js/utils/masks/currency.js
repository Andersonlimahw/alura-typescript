export const formatCurrency = ({ money }) => {
    return new Intl.NumberFormat().format(money);
};
