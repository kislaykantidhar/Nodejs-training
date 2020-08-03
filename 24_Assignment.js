let jwt=require("jsonwebtoken");
const { options } = require("joi");
let data={
    location:"Belarus",
    mission:"Getting the launch codes",
    target:"Mihail Ubbosinov",
    comments:"goodluck Agent 47"
}
let privateKey="DoYouThinkIWillTellYou?";

let token=jwt.sign(data,privateKey,{algorithm:"HS384"});
console.log(token);//header.payload.signature

//--------------verifying-----------------

try {
    let decoded=jwt.verify(token,privateKey);
    console.log(decoded);
} catch (error) {
    console.log(error);
}
//--------------verifying with wrong key-------
try {
    let decoded=jwt.verify(token,"hello from the other side");
    console.log(decoded);
} catch (err) {
    console.log(err);
}

