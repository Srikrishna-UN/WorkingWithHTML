function palindrome_checker()
{
    let num=document.getElementById("input").value
    let rev_num=reverseString(num);

    if(num===rev_num)
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