const express=require('express');
const app=express();
const path=require('path');

const helmet=require('helmet');

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))

function validateUser(req,res,next){
    res.locals.validated=true;
    next();
}

app.use(validateUser);

app.get('/',(req,res,next)=>{
    res.render("index",{
        msg:"success",
        msg2:"jeronimo",
        sendhtml:"<ul><li>one</li><li>two</li></ul>" ,//this obj here is having name local
        countries:[
            {
                name:"India",
                capital:"New Delhi"
            },
            {
                name:"Israel",
                capital:"I dont know"
            }
        ]
    });
})

app.listen(5252)