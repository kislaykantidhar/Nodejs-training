const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.text())

const getToken=require('./routes/getToken');
const validateToken=require('./routes/validateToken')
const getMultiple=require('./routes/getMultiple');
const countCharacters=require('./routes/countCharacters');
const checkArmstrong=require('./routes/checkArmstrong')

app.use('/',getToken);
app.use('/',validateToken);
app.use('/',getMultiple);
app.use('/',countCharacters);
app.use('/',checkArmstrong);
app.listen(5222);
