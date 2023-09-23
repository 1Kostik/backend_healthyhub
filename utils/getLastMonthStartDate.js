const getLastMonthStartDate = () => {
  const currentDate = new Date();
  const lastMonthStartDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    1
  );
  return lastMonthStartDate;
};

module.exports = getLastMonthStartDate;
