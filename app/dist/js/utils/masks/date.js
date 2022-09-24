export const formatDate = ({ date }) => {
    return new Intl.DateTimeFormat().format(date);
};
