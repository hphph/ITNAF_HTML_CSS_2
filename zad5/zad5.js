function fib(n)
{
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fib(n-1)+fib(n-2);
}

function fibbonaci(n)
{
    arr = []
    for(i = 0; i < n; i++)
    {
        arr.push(fib(i));
    }
    return arr;
}

console.log(fibbonaci(9));