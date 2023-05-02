function palindrome_checker()
{
    let num=document.getElementById("input").value
    let display=document.getElementById("display");
    if(num===reverseString(num))
    {
        display.style.color="palegreen";
        display.innerHTML=`<h2> Palindrome </h2>`;
    }

    else
    {
        display.style.color="red";
        display.innerHTML=`<h2> !(Palindrome) </h2>`
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