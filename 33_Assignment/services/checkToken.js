const jwt=require('jsonwebtoken');
let checkToken=(recievedToken,secretKey)=>
{
    try {
        let decoded=jwt.verify(recievedToken,secretKey);
        console.log(decoded);
        return true;
    } catch (err) {
        return false;
    }
}
module.exports={checkToken:checkToken};