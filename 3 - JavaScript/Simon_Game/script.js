let game_pattern = [];
let user_pattern = [];

let colors = ["red", "blue", "yellow", "green"];

//get button and result
let button = document.querySelectorAll("button");
let result = document.querySelector(".result");

startGame();
//System Generate a number and store

function startGame() {
    user_pattern = [];
    //random generate and push the colors

    let pattern = Math.floor(Math.random() * 4);
    let current_color = colors[pattern];
    game_pattern.push(current_color);

    blink(current_color);

}

function blink(color) {
    let blinking = document.querySelector("." + color);
    blinking.classList.add("blink");

    setTimeout(function () {
        blinking.classList.remove("blink");
    }, 400)
}

button.forEach(btn => {
    btn.addEventListener("click", function () {


        //user touch and store that 
        let user = this.classList[0];
        user_pattern.push(user);

        let current_index = user_pattern.length - 1;

        //case 1 if not equal the patter then it reset the game
        if (game_pattern[current_index] !== user_pattern[current_index]) {
            result.textContent = "Game Over";
            game_pattern = [];
            return;
        }

        //case 2 if it length same , then one round is finish and ready for next
        if (game_pattern.length === user_pattern.length) {
            result.textContent = "Continue the Game";
            setTimeout(startGame, 400);// do some delay and run form start
        }
    })
})