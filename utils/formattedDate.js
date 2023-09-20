const formattedDate = () => {
    const currentDate = new Date();
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("ru-RU", options);
    return formattedDate;
};
module.exports = formattedDate;
/*
  const currentDate = new Date();
  const options = { day: "numeric", month: "numeric", year: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("ru-RU", options);
*/
