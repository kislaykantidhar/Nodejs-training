const express =require('express')
const path=require('path')
const helmet=require('helmet')
const cookieparser=require('cookie-parser');
const { default: contentSecurityPolicy } = require('helmet/dist/middlewares/content-security-policy');

const app=express();
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cookieparser())

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use((req,res,next)=>{
    if(req.query.msg=='fail')
    {
        res.locals.msg='Sorry this username and password combination does not exist'
    }
    else
    {
        res.locals.msg=''
    }
    next();
})

app.get('/',(req,res,next)=>{
    res.send("you good")
})
app.get('/login',(req,res,next)=>{
    // console.log(req.query);
    const msg=req.query.msg;
    if(msg=="fail"){
        //something else
    }
    

    res.render("login");
})

app.post('/process_login',(req,res,next)=>{
    // res.json(req.body)
    let username=req.body.username;
    let password=req.body.password;

    if (password==="jojo"){
        res.cookie('username',username);
        res.redirect('/welcome')
    }
    else{
        res.redirect('/login?msg=fail&test=hello');
    }
})

app.get('/welcome',(req,res,next)=>{
    res.render("welcome",{
        username:req.cookies.username
    });
})

app.param('id',(req,res,next,id)=>{
    console.log("params",id);
    next();
})

app.get('/story/:id',(req,res,next)=>{
    res.send(`<h1>story ${req.params.storyID}</h1>`)
})

app.get('/story/:storyID/another',(req,res,next)=>{
    res.send(`<h1>story ${req.params.storyID}------${req.params.another}</h1>`)
})

app.get('/statement',(req,res,next)=>{
    // res.sendFile(path.join(__dirname+"/pic/image1.png"));
    res.download(path.join(__dirname+"/pic/image1.png"),'jerecho.png',(error)=>{
        if(error)
        {
            if(!res.headersSent){
                res.redirect('/download/error')
            }
            else{
                //some other way
            }
        }
    });
})

app.get('/logout',(req,res,next)=>{
    res.clearCookie('username');
    res.redirect('/login')
})

app.listen(5222)