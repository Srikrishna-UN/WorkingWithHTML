window.addEventListener("keydown", (e)=>{
        let keyPressed=document.querySelector(".key[data-ascii='"+e.keyCode+"']");
        let soundName=keyPressed.querySelector("span").innerText;
        let sound=document.createElement("audio");

        sound.setAttribute("src",`./sounds/${soundName}.wav`);
        sound.play();
    }
)

// function key_sound(e)
// {
//     let keyPressed=document.querySelector(".key[data-ascii='"+e.keyCode+"']");
//     let soundName=keyPressed.querySelector("span").innerText;
//     let sound=document.createElement("audio");
//
//     sound.setAttribute("src",`./sounds/${soundName}.wav`);
//     sound.play();
// }

