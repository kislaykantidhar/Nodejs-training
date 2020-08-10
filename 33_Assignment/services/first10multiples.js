let getfirsttenmultiples=(num)=>
{
    ans={};
    for(let i=1;i<=10;i++)
    {
        
        ans[i]=num*i;
    }
    return ans; 
    
}

module.exports={getfirsttenmultiples:getfirsttenmultiples};