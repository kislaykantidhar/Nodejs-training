let jwt=require('jsonwebtoken');

let createToken=(data,secretkey)=>
{
    let token=jwt.sign(data,secretkey,{algorithm:"HS384"});
    return token;
}

module.exports={createToken:createToken}