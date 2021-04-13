const express = require("express");
const User = require("../models").user;
// const Reservation = require("../models").reservation;
const Coin = require("../models").coin
const UserCoin = require("../models").UserCoin
const { Router } = express;

const router = new Router();

// router.get("/", async (req, res, next) => {
//   try {
    
//     const users = await User.findOne({ where: { id }, include: [ Coin] });
//     try {
//         const userId =parseInt(req.params.userId)
//         if (!user) {
//           res.status(404).send("User not found");
//         } else {
//           res.send(user);
//         }
//     }catch(e){

//     }
//     res.send(users);
//   } catch (e) {
//     next(e);
//   }
// });

//GET an user by id
//OPEN AT THE BROWSER localhost:4000/user/id
// router.get("/:userId", async (req, res) => {
//   try {
//     const userId = parseInt(req.params.userId);
//     const user = await User.findByPk(userId, {});

//     if (!user) {
//       res.status(404).send("User not found");
//     } else if (user.isNutritionist) {
//       const fullUser = await User.findByPk(userId, {
//         include: [{ model: User, as: "patients" }],
//       });
//       console.log("doctor with patients", fullUser.toJSON());
//       res.send(fullUser);
//     } else {
//       const fullUser = await User.findByPk(userId, {
//         include: [{ model: User, as: "doctor" }],
//       });
//       console.log("patient with doctor", fullUser.toJSON());
//       res.send(fullUser);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });

// //Update an user
//at terminal http PUT :4000/users/1 name="Andreia"
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
// router.put("/:userId", async (req,res, next) => {
//    try {
//     const userId = parseInt(req.params.userId);
//     const updateUser = await User.findByPk(userId)
//     if (!updateUser) {
//       res.status(404).send("User not found");
//     } else {
//       const updated = await updateUser.update(req.body)
//       res.json(updated)
     
//     }
//   } catch (e) {
//     next(e);
//   }
// })

module.exports = router;