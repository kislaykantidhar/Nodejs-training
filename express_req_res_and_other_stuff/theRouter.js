const express=require('express');
let router=express.Router();

// instead of app.get we will do router.get 

router.get('/',(req,res,next)=>{
    res.json({
        msg:"it works"
    })
})

module.exports=router;