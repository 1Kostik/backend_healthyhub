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
    .select("-_id -owner -updatedAt -createdAt") // Відключаємо _id, owner updatedAt createdAt)
    .sort({ createdAt: 1 }) // Сортуємо по даті в порядку зростання
    .exec();

  // Перероблюємо формат даты
  const formattedStatistics = statistics.map((item) => ({
    value: item.value ? item.value : item.weight || item.calories,
    date: formatDate(item.date),
  }));

  return formattedStatistics;
};

// Форматуємо дату
function formatDate(dateString) {
  const parts = dateString.split(".");
  if (parts.length === 3) {
    const day = parts[0].padStart(2, "0");
    const month = parts[1].padStart(2, "0");
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return "Invalid Date";
}

module.exports = getLastMonthStatistics;
