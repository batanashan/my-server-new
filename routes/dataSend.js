var express = require('express')
var router =  express.Router()

router.get("/get-std",(req,res,next)=>{
    
    res.send("get the student")

})

router.post("/post-std",(req,res,next)=>{
    const name = req.query.name;
    const marks =req.query.marks;
    res.send(`i am ${name} , my marks are ${marks}`)

})

router.delete("/delete-std/:name/:age",(req,res,next)=>{
   const name= req.params.name;
   const age = req.params.age
    res.send(`my name is ${name} ,my  age ${age}`)

})
router.post("/login",(req,res,next)=>{
   const data =  req.body.data
    res.send(`${data.name} and ${data.age}`)

})
router.put("/put-std",(req,res,next)=>{
  const name=  req.headers.name
  const age = req.headers.age
    res.send(`my name is ${name} ,my  age ${age}`)

})
module.exports = router;