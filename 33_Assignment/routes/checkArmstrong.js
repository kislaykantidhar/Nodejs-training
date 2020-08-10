let express=require('express');
let router=express.Router();
let {isArmstrong}=require('../services/isArmstrong')
router.get('/checkArmstrong',(req,res)=>{
    let no=req.query.num;
    let result;
    try {
        if(!isNaN(no))
        {
            result=isArmstrong(Number(no));
        }
        else
        {
            throw new Error("NOT A NUMBER");
        }
    } catch (error) {
        result="not a number";    
    }
    finally
    {
        res.send(result);
    }
})

module.exports=router;