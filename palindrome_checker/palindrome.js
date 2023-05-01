function palindrome_checker()
{
    let num=document.getElementById("input").value

    if(num===reverseString(num))
    {
        console.log("Is a palindrome");
    }

    else
    {
        console.log("Not a palindrome");
    }
}

let reverseString=(str)=>
{
    let rev_str='';
    for(let i=(str.length-1);i>=0;i--)
    {
        rev_str+=str[i];
    }

    return rev_str;
}