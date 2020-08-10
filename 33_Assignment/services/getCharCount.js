let getCharCount=(word)=>
{
    let hashmap={};
    for(let ch of word)
    {
        if(!hashmap[ch])
        {
            hashmap[ch]=1;
        }
        else
        {
            hashmap[ch]+=1;
        }
    }
    return hashmap;
}
module.exports={getCharCount:getCharCount};