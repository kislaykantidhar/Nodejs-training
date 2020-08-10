const express=require('express');
const Ajv=require('ajv');
const ajv=new Ajv();

const {getfirsttenmultiples}=require('../services/first10multiples');
const router=express.Router()
router.get('/getMultiple',(req,res)=>{
    let no=req.body;
    
    let result;
    let schema={
        "type":"number"

    }
    let validate=ajv.compile(schema);
    if(validate(Number(no)))
    {   
        result=getfirsttenmultiples(Number(no));
        res.send(result)

    }
    else
    {
        res.send(validate.errors[0].message);
    }
    
})

module.exports=router;