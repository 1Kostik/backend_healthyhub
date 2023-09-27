const getLastYearStatistics = async (owner, model) => {
  const currentDate = new Date();

  // Визначаємо перший день минулого року
  const firstDayOfLastYear = new Date(currentDate);
  firstDayOfLastYear.setFullYear(currentDate.getFullYear() - 1); // Відмінусовуємо рік на один, щоб отримати минулий рік
  firstDayOfLastYear.setMonth(0); // Встановлюємо місяць на січень
  firstDayOfLastYear.setDate(1); // Встановлюємо день на перший січня

  // Визначаємо останній день минулого року
  const lastDayOfLastYear = new Date(currentDate);
  lastDayOfLastYear.setFullYear(currentDate.getFullYear() - 1); // Відмінусовуємо рік на один, щоб отримати минулий рік
  lastDayOfLastYear.setMonth(11); // Встановлюємо місяць на грудень
  lastDayOfLastYear.setDate(31); // Встановлюємо день на 31 грудня

  // Здійснюємо пошук статистики за вказаним періодом
  const statistics = await model
    .find({
      owner, // Визначається по токену при логіні
      createdAt: { $gte: firstDayOfLastYear, $lte: lastDayOfLastYear },
    })
    .select("-_id -owner -updatedAt") // Відключаємо _id, owner updatedAt
    .exec();

  // Сортуємо статистику по даті в порядку зростання
  statistics.sort((a, b) => a.createdAt - b.createdAt);

  // Форматуємо дати в формат "January" ...
  const formattedStatistics = statistics.map((stat) => ({
    value: stat.value ? stat.value : stat.weigth || stat.calories,
    date: new Date(stat.createdAt).toLocaleString("en-US", { month: "long" }),
  }));

  return formattedStatistics;
};

module.exports = getLastYearStatistics;
