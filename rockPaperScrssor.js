function getComputerChoice(){ //random computer choice, returns string
    cpu = Math.floor((Math.random() * 3) + 1); //Math.random returns a number 0-1 * 3 (0-2) + 1 gives 1-3.  Then round down with Math.floor.
    if(cpu == 1){
        return "Rock";
    }
    else if(cpu == 2){
        return "Paper";
    }
    else{
        return "Scissros";
    }   
}
function getUserChoice(){//takes user input and returns string
    let choice = prompt("Enter Rock Paper or Scissors:"); // takes in string from user and immediatly puts in lower case so user can type in ROCK ROck or rock
    choice = choice.toLowerCase();

    if(choice == "rock"){
        return "Rock";
    }
    else if(choice == "paper"){
        return "Paper";
    }
    else{
        return "Scissors";
    } 
}
function playRound(userChoice, cpuChoice){//plays one round and keeps score, values from getComputerChoice and getUserChoice are passed in
    
    if(userChoice == "Rock"){
        console.log("You played Rock");
    
        if(cpuChoice == "Rock"){
            console.log("Rock and Rock is a tie");
            }
        else if(cpuChoice == "Paper"){  
            console.log("CPU played Paper, You lose");
            cpuCount++;
            }
        else{ 
            console.log("CPU played Scissors, You win");
            userCount++;
            }
    }
    
    else if(userChoice == "Paper"){
        console.log("You played Paper");
    
        if(cpuChoice == "Rock"){  
                console.log("CPU player Rock, You Win");
                userCount++;
            }
        else if(cpuChoice == "Paper"){      
                console.log("Paper and Paper is a tie");
            }
        else{
                console.log("CPU player Scissors, You lose");
                cpuCount++;
            }
    
    }
    
    else if(userChoice == "Scissors"){
        console.log("You played Scissors");
    
        if(cpuChoice == "Rock"){     
                console.log("CPU played Rock, You lose");
                cpuCount++;
            }
        else if(cpuChoice == "Paper"){      
                console.log("CPU played Paper, You win");
                userCount++;
            }
        else{
                console.log("Scissor and Scissor is a tie");
            }
    }
    
    console.log(`User: ${userCount}   CPU: ${cpuCount}`);
}


let userCount = 0;//counter values are kept outside the function or the count would reset to 0 after every round
let cpuCount = 0;
let roundCount = 1;//sentinal value to stop game at 5 rounds

while(roundCount <= 5){//loop allows for 5 rounds
    let userMove = getUserChoice(); //users choice is stored in userMove
    let cpuMove = getComputerChoice();//cpu random choice is stored in cpuMove
    playRound(userMove, cpuMove);//both user and cpu move are passed in play round to play one round

    roundCount++;
}



