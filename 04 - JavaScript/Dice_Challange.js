let dice_size = 6;
let player1 = Math.floor(Math.random() * dice_size) + 1;
let player2 = Math.floor(Math.random() * dice_size) + 1;

console.log("Player 1 Dice is " +player1);
console.log(`Player 2 Dice is ${player2}`);

if (player1 > player2) {
    console.log("Player 1 Wins");
}
else if (player1 == player2) {
    console.log("Match Draw");
}
else {
    console.log("Player 2 Wins")
}

