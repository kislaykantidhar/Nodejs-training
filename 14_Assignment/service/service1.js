//service to print all even numbers upto the given number
function printEvenNosUpto(n)
{
    console.log(`the enen nos upto ${n}`);
    for (let i=0;i<=n;i+=2)
    {
        console.log(i);
    }
}

module.exports={printEvenNosUpto:printEvenNosUpto}