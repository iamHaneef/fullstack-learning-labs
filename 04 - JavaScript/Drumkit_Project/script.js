let NumberOfButtons = document.querySelectorAll(".drum").length;

//mouse click event
for(let i=0 ; i<NumberOfButtons ; i++)
{
    //loops for iterate over index 0,1,2.3.4 --> event listener
    document.querySelectorAll(".drum")[i].addEventListener("click",function music(){

        // which key are clicked in page --> InnerHTML
        var touch = this.innerHTML;
        Notes(touch);

    })
}

// we can play the sound by Keyboard keys --> event
document.addEventListener("keypress",function(e)
{
    Notes(e.key);
})

function Notes(touch)
{
        switch(touch)
        {
            case "S":
            case "s":
            
                let note1 = new Audio("./note1.mp3");
                note1.play();
                break;

            case "D":
            case "d":
            
                let note2 = new Audio("./note2.mp3");
                note2.play();
                break;  
                
            case "F":
            case "f":
            
                let note3 = new Audio("./note3.mp3");
                note3.play();
                break;

            case "G":
            case "g":
            
                let note4 = new Audio("./note4.mp3");
                note4.play();
                break;

            case "H":
            case "h":
            
                let note5 = new Audio("./note5.mp3");
                note5.play();
                break;  
                              
            default:
                console.log("Invalid Key");
                break;    
        }
}


