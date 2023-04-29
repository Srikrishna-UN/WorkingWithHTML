document.addEventListener("keydown", key_sound)

function key_sound(e)
{
    let keypressed=document.querySelector(`.key[data-key=`${e.keyCode}`]`);
    let soundname=keypressed.querySelector("span");
    
}