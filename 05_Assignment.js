function checker(para1,para2)
{
    if(para1){
        console.log(para1+" there is an error.");
    }
    else{
        console.log("Yo here is the result"+para2);
    }
}

function calculatesum(a,b,callback,t)
{
    setTimeout(function(){
        if(isNaN(a)||isNaN(b))
        {
            callback("what the heck?",null);
        }
        else{
            callback(null,a+b);
        }
    },t);
}
 
calculatesum("hey jude",5,checker,2000);
calculatesum(5,5,checker,3000);