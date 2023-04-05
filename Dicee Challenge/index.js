const diceNumber = ["images/dice1.png","images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]
let randomNumber1= Math.floor(Math.random()*6);
let randomNumber2= Math.floor(Math.random()*6);
document.querySelector(".img1").src=diceNumber[randomNumber1];
document.querySelector(".img2").src=diceNumber[randomNumber2];
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is the winner! 🎉"
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 is the winner! 🎉"
}
else {
    document.querySelector("h1").innerHTML="It's a tie! 🎉"
}