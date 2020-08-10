const express=require('express');
const {checkToken}=require('../services/checkToken')
const router=express.Router();
router.post('/validateToken',(req,res)=>{
    let recievedToken=req.body;
    res.send(checkToken(recievedToken,"sec-key"))
})

module.exports=router;