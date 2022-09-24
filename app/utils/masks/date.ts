interface FormatDateInput {
    date: Date;
}
export const formatDate = ({ date } : FormatDateInput) : string => {
    return new Intl.DateTimeFormat().format(date);
}