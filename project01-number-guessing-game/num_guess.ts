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
    let guess = await inquirer.prompt({
        name:"guess",
        type:"number",
        message:"Enter a number(Hint:0-100):"});
        let rand = Math.ceil(Math.random() * 100);
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
            do
            {
                continue;
            }
            while(tryagain.tryagain=="Yes")
            do
            {
                console.log(`ProfileName: ${name.name}`)
                console.log(`You scorred: ${i}`);
                
                break;
            }
            while(tryagain.tryagain=="No")
            
        }
        else
        {
            console.log("Try Again");
        }
    }
if(startgame.start=="Exit")
{
    console.log("Goodbye");
}