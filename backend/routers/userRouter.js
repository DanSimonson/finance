const express = require("express");
const expressAsyncHandler = require("express-async-handler");
var bcrypt = require("bcryptjs");
const { User } = require("../models/UserModal");
const { generateToken } = require("../utils");
const { users } = require("../../data");
const { Token } = require("../models/TokenModal");
const { sendMail } = require("../sendMail");
const crypto = require("crypto");
const userRouter = express.Router();

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send({ users });
  })
);

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({})
    const createdUsers = await User.insertMany(users);
    res.send({ createdUsers });
  })
);
userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid email or password" });
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    const createdUser = await user.save();
    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    console.log("token: ", token);
    const url = `${process.env.BASE_URL}users/${user.id}/verify/${token.token}`;
    console.log("url: ", url);
    console.log("user.email: ", user.email);
    await sendMail(user.email, "Verify Email", url);

    // res
    //   .status(201)
    //   .send({ message: "An Email was sent to your account. Please verify." });
    res.status(201).send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
      message: "An Email was sent to your account. Please verify.",
    });
  })
);
userRouter.get(
  "/:id/verify/:token/",
  expressAsyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.id });
      if (!user) return res.status(400).send({ message: "Invalid link" });

      const token = await Token.findOne({
        userId: user._id,
        token: req.params.token,
      });
      if (!token) return res.status(400).send({ message: "Invalid link" });

      await User.updateOne({ _id: user._id, verified: true });
      await token.remove();

      res.status(200).send({ message: "Email verified successfully" });
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  })
);

// export default userRouter;
module.exports = {
  userRouter,
};
