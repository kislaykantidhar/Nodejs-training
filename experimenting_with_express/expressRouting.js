const express=require('express');
const app=express();

// app has a few methods:
// 1.get-read
// 2.post-creatr
// 3.delete
// 4.put-update
// 5.all - i will accept anything
// they take path and the callback
// app.all("/",(req,res)=>{
//     res.send('<h1>blah blah</h1>');
    
// })


app.get("/",(req,res)=>{
    res.send('<h1>blah get blah</h1>');

})


app.post("/",(req,res)=>{
    res.send('<h1>blah post blah</h1>');
    
})

app.delete("/",(req,res)=>{
    
})

app.put("/",(req,res)=>{
    
})


app.listen(5252);