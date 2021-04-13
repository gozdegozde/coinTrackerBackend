const User = require("./models").user;
const Coin = require("./models").coin

// async function getAllUsers() {
//   try {
//     // This is how we can use a query method to get all the users from the database
//     // Selects all rows. Resolves with a (possibly empty) array
//     const allUsers = await User.findAll();
//     return allUsers.map(user => user.toJSON());
//   } catch (e) {
//     console.log(e);
//   }
// }

// getAllUsers().then(users => console.log(users));

// async function getAllCoins() {
//   try {
//     // This is how we can use a query method to get all the users from the database
//     // Selects all rows. Resolves with a (possibly empty) array
//     const allCoins = await Coin.findAll();
//     return allCoins.map(coin => coin.toJSON());
//   } catch (e) {
//     console.log(e);
//   }
// }

// getAllCoins().then(coins => console.log(coins));

const { user,coin } = require("./models")
async function itemsWithTags() {
  const items = await user.findAll({ include: [coin]})
  console.log(items)
  return items.map(item=>item.get({ plain: true}))
  
}

itemsWithTags().then(items => console.log("items with tags", items));
