//Print number 1 to 100 without using any loop. 

function recursionprint(num)
{
    if (num==100)
    {
        console.log(num);
        return;
    }
    
    else
    {
        console.log(num);
        return recursionprint(++num);
    }
}

recursionprint(1);