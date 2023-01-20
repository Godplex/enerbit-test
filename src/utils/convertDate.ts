export const converDate = (dateToConvert: string) => {
  let date = new Date(Date.parse(dateToConvert));
  const formatDate =
    date.getDate() < 9 ? `0${date.getDate() + 1}` : date.getDate() + 1;
  const formatMonth =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const formattedDate = [date.getFullYear(), formatMonth, formatDate].join("-");
  return formattedDate;
};
