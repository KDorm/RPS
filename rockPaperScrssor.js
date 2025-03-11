function cpuNum(){

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

let userMove = parseInt(prompt("1-Rock   2-Paper  3-Scissors"));

let cpuMove = cpuNum();

if(userMove == 1){
    if(cpuMove == "Rock"){
        console.log("Rock and Rock is a tie");
    }
    else if(cpuMove == "Paper"){
        console.log("You lose");
    }
    else{
        console.log("You win");
    }

}

