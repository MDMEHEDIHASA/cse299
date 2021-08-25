const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateToken = require('../util/generateToken')

exports.postLogIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (user &&(await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isStudent:user.isStudent,
        token:generateToken(user._id)
      });
    } else {
      res.status(401).send(JSON.stringify("Password or email donot match."));
    }
  } catch (err) {
    res.status(401).send(JSON.stringify("Something went wrong."));
  }
});



exports.postSignUp = asyncHandler(async (req, res) => {
  const { name, email, password, isStudent,confirmPassword } = req.body;
  if(password !== confirmPassword){
    res.status(401).send(JSON.stringify("Password and Confirm Password donot match."))
  }
  if (password.length < 5 || password.length > 9) {
    res
      .status(401)
      .send(JSON.stringify("Password must be between 5 to 8 character."));
  } else {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(409).send(JSON.stringify("This Email already exist."));
    }
    const saltRounds = 10;
    const newPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      name: name,
      email: email,
      password: newPassword,
      isStudent: isStudent
    });
    if (user) {
      res.status(200).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isStudent:user.isStudent,
        token:generateToken(user._id)
      });
    } else {
      res.status(401).send(JSON.stringify("Try fill up all the equipment."));
    }
  }
});



exports.getUserProfile = asyncHandler(async(req,res)=>{
  const user = await User.findOne({_id:req.user._id});
  if(user){
    res.status(201).json({
      _id:user._id,
      name:user.name,
      email:user.email,
      isStudent:user.isStudent
    });
  }else{
    res.status(404).send(JSON.stringify("User Not found."))
  }
})


exports.updateUserProfile = asyncHandler(async(req,res)=>{
  const user = await User.findOne({_id:req.user._id})
  if(user){
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if(req.body.password){
      const saltRounds = 10;
      user.password = await bcrypt.hash(req.body.password, saltRounds);
    }
    const updateUser = await user.save();
    res.status(201).json({
      _id:updateUser._id,
      name:updateUser.name,
      email:updateUser.email,
      isStudent:updateUser.isStudent,
      token:generateToken(updateUser._id)
    });
  }else{
    res.status(404).send(JSON.stringify("Sorry,this user is not found."))
  }
})