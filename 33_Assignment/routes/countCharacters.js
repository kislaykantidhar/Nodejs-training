const express=require('express');
const router=express.Router();
const Ajv=require('ajv');
const ajv=new Ajv();
const {getCharCount}=require('../services/getCharCount');

router.get('/countCharacters',(req,res)=>{
    
    // console.log(word);
    if (req._body===undefined)
    {
        res.send("No string to read")
    }
    else{
    let word=req.body;
    const schema={
        "type":"string",
        "minLength":1
      }
    
    let validate=ajv.compile(schema);
    if(validate(word))
    {
        
        res.send(getCharCount(word));
    }
    else
    {
        res.send(validate.erros[0].message);
    }
        
}
})

module.exports=router;