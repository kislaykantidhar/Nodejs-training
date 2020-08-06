const express=require('express');

// all is the function of app which has two parameters as arguments
// 1st Route 
// 2nd call back to the function if requested
const app=express();
app.all('*',(req,res)=>{//* means it will take anything
    // express handles the headers  
    //also the end
    res.send('<h1>the home page</h1>');
})

app.listen(5252);
console.log("sssssh")