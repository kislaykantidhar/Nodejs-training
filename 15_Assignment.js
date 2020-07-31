const prompt= require('prompt-sync')();
const date=prompt('please input the date with format dd-mm-yyyy:');
try
{
    
    if (/^(([1-2][0-9])|([1-9])|(3[0-1]))-((1[0-2])|([1-9]))-[0-9]{4}$/.test(date))
    {
    let ndate=date.split('-');
    let year=Number(ndate[2]);
    let month=Number(ndate[1]);
    let day=Number(ndate[0]);
    let dateob=new Date(year,month-1,day);
    let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    console.log('The respective Day is:'+days[dateob.getDay()]);
    
    }
    else
    {
        throw new Error("please use valid date and valid format");
    }
}
catch(err)
{   
    console.log("error:"+err);
}
