let {runService}= require('../service/index.js');
function controller(choice,number)
{
    if(number===undefined)
    {
        return "undefined number";
    }
    else if(choice==undefined)
    {
        return "undefined choice";
    }
    else if(choice<0 || choice>1)
    {
        return "Please enter 1. for even nos and 2. for odd nos";
    }
    else if(isNaN(choice) || isNaN(choice)){
        return " either choice or range is not defined properly";
    }
    else{
       return  runService(choice,number);
    }
}
module.exports={controller:controller}