const express = require("express")
const User = require("../models/user");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");


authRouter.post("/signup", (req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    if (err) return res.status(500).send({success: false, err});
    if (user) {
      return res.status(400).send({success: false, err: "That Username already exists"})
    }
    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) return res.status(500).send({success: false , err});
      return res.status(201).send({success: true , user})
    });
  });
});

authRouter.post("/login",(req, res) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) {
            return res.status(401).send({success: false, message: "Username or password is not valid"})
        }
        if (user) {
          user.checkPassword(req.body.password, (err, match) => {
              if (err) throw err;
              if (!match) {
                res.status(401).send({success: false, message: "Username or password are incorrect."})
              }
          const token = jwt.sign(user.toObject(), process.env.SECRET, {expiresIn: "24hr"});
          return res.send({user: user.withoutPassword(), token: token, user: user.toObject(), success: true, message: "Here's your token!"})
          })
        }
    })
})

module.exports = authRouter;
