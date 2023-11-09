function sum(arr)
{
    sum = 0;
    arr.forEach(e => sum += e);
    return sum;
}

console.log(sum([3, 7, 5]));