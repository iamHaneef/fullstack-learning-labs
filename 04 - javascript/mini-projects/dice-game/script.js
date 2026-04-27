let button = document.querySelector("button");

button.addEventListener("click" , function()
{
    //Two Player roll a dice from 1 to 6 at random

    let player1 = Math.floor(Math.random()*6)+1;
    let player2 = Math.floor(Math.random()*6)+1;

    //we take the image element from html class
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");

    //store all dice image in array and it start from 0
    let array = [
        "../../assets/dice-six-faces-1.png",
        "../../assets/dice-six-faces-2.png",
        "../../assets/dice-six-faces-3.png",
        "../../assets/dice-six-faces-4.png",
        "../../assets/dice-six-faces-5.png",
        "../../assets/dice-six-faces-6.png"
    ]

    img1.src = array[player1-1]; // array start from 0 so we minus 1
    img2.src = array[player2-1];
    
    //we need to make a Result Message so
    let result = document.querySelector(".result");
    
    if(player1 > player2)
    {
        result.textContent = "Tyler Won";
    }
    else if(player1 < player2)
    {
        result.textContent = "Durder Won";
    }
    else
    {
        result.textContent = "Match Draw";
    }

})