function palindrom(str)
{
    stack = []
    len = str.length/2 - 1;
    if(str.length % 2 == 1)
        len = str.length/2
    for(let i = 0; i <= len; i++)
    {
        stack.push(str.charAt(i));
    }
    for(let i = str.length/2; i < str.length; i++)
    {
        if(stack.pop() != str.charAt(i)) return false;
    }
    return true;
}

console.log(palindrom('kajak'));
console.log(palindrom('kajjak'));
console.log(palindrom('skajjak'));