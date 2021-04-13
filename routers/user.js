const express = require("express");
const User = require("../models").user;
// const Reservation = require("../models").reservation;
const Coin = require("../models").coin
const UserCoin = require("../models").UserCoin
const { Router } = express;

const router = new Router();



// GET an user by id

router.get("/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId,{ 
      include: [ Coin ]
    });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (e) {
    next(e);
  }
});


module.exports = router;