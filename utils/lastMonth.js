const getLastMonthStatistics = async (owner, model) => {
  const currentDate = new Date();

  // Визначаємо перший день минулого місяця
  const firstDayOfLastMonth = new Date(currentDate);
  firstDayOfLastMonth.setMonth(currentDate.getMonth() - 1);
  firstDayOfLastMonth.setDate(1);

  // Визначаємо останній день минулого місяця
  const lastDayOfLastMonth = new Date(currentDate);
  lastDayOfLastMonth.setDate(0);

  // Здійснюємо пошук статистики за вказаним періодом
  const statistics = await model
    .find({
      owner, // Визначається по токену при логіні
      createdAt: { $gte: firstDayOfLastMonth, $lte: lastDayOfLastMonth },
    })
    .select("-_id -owner -updatedAt -createdAt") // Відключаємо _id, owner updatedAt createdAt
    .exec();

  return statistics;
};

module.exports = getLastMonthStatistics;
