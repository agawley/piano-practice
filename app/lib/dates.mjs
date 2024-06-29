export const getTodaysKey = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date.getTime().toString(32);
};

export const getWeekStartKey = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  // Goes to saturday
  date.setDate(date.getDate() - date.getDay() - 1);
  return date.getTime().toString(32);
};
