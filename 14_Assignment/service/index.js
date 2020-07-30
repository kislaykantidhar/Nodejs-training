let {printEvenNosUpto}= require('./service1.js');
let {printOddNosUpto}=  require('./service2.js');

let runService=function(option,n)
{
    if (option==1)
    {
        printEvenNosUpto(n);
    }
    else{
        printOddNosUpto(n);
    }
    return "Done";
}

module.exports={runService:runService}