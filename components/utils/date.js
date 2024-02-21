const date = () => {
  // current Date format
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const date = { day: day, month: month, year: year };
  return date;
};

export default date;
