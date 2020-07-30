//service to print all odd numbers upto the given number
function printOddNosUpto(n)
{
    console.log(`the odd nos upto ${n}`);
    for (let i=1;i<=n;i+=2)
    {
        console.log(i);
    }
}

module.exports={printOddNosUpto:printOddNosUpto}