function range(from, to)
{
    rangeArr = [];
    if(to < from) 
    {
        for(let i = from; i >= to; i--)
        {
            rangeArr.push(i);
        }
        return rangeArr;
    }    
    for(let i = from; i <= to; i++)
    {
        rangeArr.push(i);
    }
    return rangeArr;
}

console.log(range(0, 0));