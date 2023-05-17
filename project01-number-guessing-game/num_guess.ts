import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgGrey("Number Guessing"));
let startgame = await inquirer.prompt(
    {
        name:"start",
        type:"list",
        message:"Menu:",
        choices:["Start Game","Exit"]
    }//Add the profile
);
if (startgame.start == "Start Game") {
    console.clear();
    let name = await inquirer.prompt({
        name:"name",
        type:"input",
        message:"What is your name?"
    });
    var i:number =0;
    console.clear();
    console.log(`Usrername: ${name.name}`);
    for(;;)
    {
        let guess = await inquirer.prompt({
            name:"guess",
            type:"number",
            message:"Enter a number(Hint:0-100):"});
            let rand = 23;
            // Math.ceil(Math.random() * 100);
            if (guess.guess == rand) {
                console.log("Wow");
                console.log("You guessed the number:" + guess.guess);
                i++;
                let tryagain = await inquirer.prompt({
                    name:"tryagain",
                    type:"list",
                    message:"Try Again?",
                    choices:["Yes","No"]
                });
                if(tryagain.tryagain=="Yes")
                {
                    console.clear();
                    console.log(`ProfileName: ${name.name}`);
                    console.log(`Score Streak: ${i}`);
                    continue;
                }
                if(tryagain.tryagain=="No")
                {
                    console.clear();
                    console.log(`ProfileName: ${name.name}`);
                    console.log(`Score Streak: ${i}`);
                    break;
                }
                
            }
            else
            {
                console.clear();
                console.log(`ProfileName: ${name.name}`);
                console.log(`Score Streak: ${i}`);
                console.log("Try Again");
                break;
            }
        }
    if(startgame.start=="Exit")
    {
        console.log("Goodbye");
    }
    }
    