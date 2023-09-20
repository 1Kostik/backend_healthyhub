const { Products, User } = require("../../models");
const { HttpError } = require("../../utils");
const { formattedDate } = require("../../utils");

const createProducts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const body = req.body;
  console.log(body);

  
  const kindOfFood=Object.keys(body)[0];
  const foodIndex = body[kindOfFood].id;
  const user = await User.findOne({owner});
  console.log(user);
  const dinnerIndex = user[kindOfFood].findIndex((item)=>item.id === foodIndex)
  console.log(dinnerIndex);
  if(dinnerIndex !== -1){
    const updateFields = body[kindOfFood];
    console.log(updateFields);
    user[kindOfFood][dinnerIndex] = {...user[kindOfFood][dinnerIndex],...updateFields}
    console.log(user);
    // user.save()
  }
//   const fild = Object.values(body);
//   const kindOfFood = Object.keys(body);
//   console.log(fild);
//   console.log(kindOfFood);
//   const allProducts = await Products.find({ owner });
//   console.log(allProducts);
 
//  const findFild= await allProducts.find({ body });
//  console.log(findFild);
  // if (allProducts.length === 0) {
  //   throw HttpError(404, "Not found");
  // }
  // res.json({
  //   status: "success",
  //   code: 200,
  //   data: { allProducts },
  // });
};

/*
получив боді з обєктом 1 в якому 1 поле їжі, дата створення + айді обєкта +айдіОвнера поля їжї  
потрібно взяти це поле, взяти з нього айді, та час створення,

потім шукаю по айдіовнера (з токена чи айді з авторизаціі) + перевіряю час створеня,
а потім шукаю 1 поле по цого айді, та перезаписую це поле

*/
module.exports = createProducts;
// криейт продукт, ключ брекфаст 1 з реквест body  = {breakfast:[{name:tea,...}]} респон статус 201 , повераю джейсон дата:{breakfast:[{name:tea,+id цого продукта чая,...}] }
//апдейт выдсилає 1 поле body = {name:tea...,id} знайти по юзеру айди по овнеру, використати метод для пошуку вложених обєктах айди, розпилити в ньому боді.

// {breakfast:{name:tea,...,id}} пошук юзера по токену, в юзері шукаю ключ брекфаст через світч кей, отримую масив обєктів, і через метод файнд шкуаємо обєкт по айді,розпилення в цей обєкт те що прийшло з фронтенду.

// switch (breakfast) {
//   case breakfast:
//     const currentItem = userbreakfast.find((item) => item.id === breakfast.id);
//     const updatecurrentItem = { ...currentItem, ...breakfast };
//     return updatecurrentItem;
// }
// $elem mach

//User.findOne({ nestedArray: { $elemMatch: { id } } }, (err, user) => {
// ...
//});
/*


получив боді з обєктом 1 в якому 1 поле їжі, дата створення + айді обєкта +айдіОвнера поля їжї  
потрібно взяти це поле, взяти з нього айді, та час створення,

потім шукаю по айдіовнера (з токена чи айді з авторизаціі) + перевіряю час створеня,
а потім шукаю 1 поле по цого айді, та перезаписую це поле





==========================================================================
body={dinner:(name:tea,...,id)}
const kindOfFood=Object.keys(body)[0];
const foodIndex = body[kindOfFood].id;
const user = await User.findOne({ownerId});
const dinnerIndex = user[kindOfFood].findIndex((item)=>item.id === foodIndex)

if(dinnerIndex !== -1){
  const updateFields = body[kindOfFood];

  user[kindOfFood][dinnerIndex] = {...user[kindOfFood][dinnerIndex],...updateFields}
  user.save()
}


res.json({
   status: "success",
    code: 200,
    data: { user },?????
})  

========================================================================
*/
