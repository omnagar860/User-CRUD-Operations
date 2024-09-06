const express = require('express');
const router = express.Router();
const User = require("../models/userSchema")

router.get("/", async(req,res)=> {
  try {
    const users = await User.find().select("+password");
    res.render("index", {users})
  } catch (error) {
    res.status(500).send(error.message);
  }
})

router.get("/create", (req,res)=> {
  res.render("create")
})

router.get("/save",(req,res)=> (
  res.redirect("/" )
))



router.post("/save",async(req,res)=> {
  try {
    const user = await new User(req.body);
    await user.save();
    console.log(user);
    res.redirect("/save");
  } catch (error) {
    res.status(500).send(error.message)
  }
})

router.get("/delete/:id",async(req,res)=> {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/")
  } catch (error) {
   res.status(500).send(error.message) 
  }
})

router.get("/update/:id", async(req,res)=> {
  const user = await User.findById(req.params.id);
  res.render("update", {user : user})
})

router.post("/update/:id", async(req,res)=> {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/")
  } catch (error) {
    res.status(500).send(error.message)
  }
})











module.exports = router;