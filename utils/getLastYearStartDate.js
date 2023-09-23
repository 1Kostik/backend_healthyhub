const getLastYearStartDate = () => {
  const currentDate = new Date();
  const lastYearStartDate = new Date(
    currentDate.getFullYear() - 1,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  return lastYearStartDate;
};

module.exports = getLastYearStartDate;
