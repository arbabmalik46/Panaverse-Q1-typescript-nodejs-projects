import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.green('Calculator'))
console.log("\n")

let num1calculator = await inquirer.prompt({
    name:"dig1",
    type:"number",
    message:"Enter 1st digit"
});
let num2calculator = await inquirer.prompt({
    name:"dig2",
    type:"number",
    message:"Enter 2nd digit"
});
let expression = await inquirer.prompt({
   name:"expression",
   type:"list",
   message:"Type expression:",
   choices:["+","-","/","*"]
} 
);
if(expression.expression==="+")
    {
        console.log(num1calculator.dig1+num2calculator.dig2)
    }
else if(expression.expression==="-")
{
    console.log(num1calculator.dig1-num2calculator.dig2)
}
else if(expression.expression==="/")
{
    console.log(num1calculator.dig1/num2calculator.dig2)
}
else if(expression.expression==="*")
{
    console.log(num1calculator.dig1*num2calculator.dig2)
}
else{
    console.log("Wrong expression. Try Again");
}