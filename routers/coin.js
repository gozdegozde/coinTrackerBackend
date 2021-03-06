const express = require("express");
const User = require("../models").user;
// const Reservation = require("../models").reservation;
const Coin = require("../models").coin
const UserCoin = require("../models").userCoin
const { Router } = express;
const { toJWT } = require("../auth/jwt");

const router = new Router();


router.get("/coins", async (req, res, next) => {
  try {
    console.log("Im getting all the coins");
    const coins = await Coin.findAll({});
    res.send(coins);
  } catch (e) {
    next(e);
  }
});
router.get("/coins/:coinId", async (req, res) => {
  try {
    const coinId = parseInt(req.params.coinId);
    const coin = await Coin.findByPk(coinId, {});
    if (!coin) {
      res.status(404).send("coin not found");
    } else {
      res.send(coin);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/users/:userId/coins", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
     include: {
    model: Coin,
    through: { attributes: ["amount", "userId", "coinId"] } 
  }
    });
    console.log("USER", user.coins[0])
    if (user) {
      res.send(user.coins);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});


router.delete(
  "/users/:userId/coins/:coinId",
  async (req, res, next) => {
    try {
      const coinId = parseInt(req.params.coinId);
      const coinById = await Coin.findByPk(coinId);
      if (!coinById) {
        res.status(404).send({ message: "Coin not found" });
      } else {
        await coinById.destroy();
        res.status(204).send({ message: "Coin deleted" });
      }
    } catch (error) {
      next(error.message);
    }
  }
);

// //at terminal http PUT :4000/users/1 name="Andreia"
// router.put("/:userId", async (req, res, next) => {
//   try {
//     const userId = parseInt(req.params.userId);
//     const userToUpdate = await User.findByPk(userId);
//     if (!userToUpdate) {
//       res.status(404).send("User not found");
//     } else {
//       const updatedUser = await userToUpdate.update(req.body);
//       console.log(`UPDATE USER`, updatedUser);
//       res.json(updatedUser);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;