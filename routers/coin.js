const express = require("express");
const User = require("../models").user;
// const Reservation = require("../models").reservation;
const Coin = require("../models").coin
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
      include: [Coin],
    });
    if (user) {
      res.send(user.coins);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});


module.exports = router;