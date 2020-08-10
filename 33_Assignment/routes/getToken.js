const express=require('express');
const router=express.Router();
const {createToken}=require('../services/createToken');
router.post('/getToken',(req,res)=>{
    // console.log(req.body);
    let token=createToken(req.body,"sec-key");
    res.send(token);


})

module.exports=router;