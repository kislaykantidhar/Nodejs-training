const prompt=require('prompt-sync')();
const moment= require('moment');
const start=moment('20-09-2018','DD-MM-YYYY');
const end =moment('10-10-2018','DD-MM-YYYY');
function job(d)
{
    let e=null;
    let result={
        inBetween:null,
        nearDate:null,
        difference:null
    };
    try
    {
        if (d.isValid())
        {
            
            if (d.isBetween(start,end))
            {
                result.inBetween=true;
                if (d.diff(start,'milliseconds')<end.diff(d,'milliseconds'))
                {
                    result.nearDate=start.format('DD/MM/YYYY');
                    result.difference=d.diff(start,'milliseconds');
                }
                else
                {
                    result.nearDate=end.format('YYYY/MM/DD');
                    result.difference=end.diff(d,'milliseconds');
                }
            }
            else{
                result.inBetween=false;
            }
        }
        else{
            throw new Error("please enter valid date and in valid format");
        }
    }
    catch(err)
    {   
        e=true;
        console.log(String(err));
    }
    finally
    {
        return [e,result];
    }
}
const date=prompt('please input the date with format dd-mm-yyyy:');
let [e,result]=job(moment(date,'DD-MM-YYYY'));
if (!e)
{
    console.log(result);
}
