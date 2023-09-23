const sumCalories = (userProduct) => {
  const breakfast = userProduct["breakfast"].map((el) => el.calories);
  const snack = userProduct["snack"].map((el) => el.calories);
  const lunch = userProduct["lunch"].map((el) => el.calories);
  const dinner = userProduct["dinner"].map((el) => el.calories);
  const arrayCalories = breakfast.concat(snack, lunch, dinner);
  const totalCaloriesToday = arrayCalories.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);
  return totalCaloriesToday;
};
module.exports = { sumCalories };
