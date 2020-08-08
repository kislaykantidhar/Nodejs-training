const express=require('express');
let router=express.Router();

// instead of app.get we will do router.get 
function userValidation(req,res,next){
    res.locals.validated=true;
    console.log("validated");
    next();
}

router.use(userValidation);


router.get('/another',(req,res,next)=>{
    res.json({
        msg:"user router works"
    })
})

module.exports=router;