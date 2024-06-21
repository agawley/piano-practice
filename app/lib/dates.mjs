export const getTodaysDate = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime().toString(32);
};

export const getWeekStart = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  // Goes to saturday
  date.setDate(date.getDate() - date.getDay() - 1);
  return date.getTime().toString(32);
};
