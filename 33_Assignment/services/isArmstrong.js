let isArmstrong=(num)=>
{
    let buff=num;
    let sum=0;
    while(num>0)
    {
        sum+=(num%10)**3;
        num=Math.floor(num/10);
    }
    if(sum===buff)
    {
        return true;
    }
    else
    {
        return false;
    }
}
module.exports={isArmstrong:isArmstrong};