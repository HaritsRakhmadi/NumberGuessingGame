const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum-minNum + 1)) + minNum;
let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt("Enter your guess number: ");
    guess  = Number(guess);
    
    if (isNaN(guess)) {
        window.alert("Enter a valid guess!");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Enter a valid guess!");
    }
    else{
        attempts++;
        if(guess < answer){
            console.log("Your answer is too low!");
        }
        else if(guess > answer){
            console.log("Your answer is too high!");
        }
        else{
            console.log("Correct!");
            console.log(`Your answer is ${answer}, you took ${attempts} attempts.`);
            running = false;
        }
    }
}
