const express=require('express');
const app= express();

function validateUser(req,res,next){
    res.locals.validated=true;
    console.log("Validation done");
    next();
}
//app.use(validateUser);//would work for any path
app.use("/jer",validateUser);//would work for /jer only
//app.get("/",validateUser);//would work for / but get request only

app.get('/jer',(req,res,next)=>{
    res.send("<h1>blah-jer</h1>")
    console.log("jerrr")
})
app.get('/jer',(req,res,next)=>{
    console.log("see if it works")
})


//these three get shows that order matter 
app.get('/',(req,res,next)=>{
    console.log("second next");
    next();
})
app.get('/',(req,res,next)=>{
    res.send("<h1>blah</h1>")
    console.log("/")
    next();
})


app.get('/',(req,res,next)=>{
    console.log("third next")
})

app.listen(5252);