import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("Currency Converter"));
let currnecies = [{
    name:"United States Dollar(USD)",
    price:282.39
},
{
    name:"United Arab Emirates Dirham",
    price:76.90
},
{
    name:"Turkish Lira",
    price:14.29
},
{
    name:"Swedish Krona",
    price:27.07
},
{
    name:"Saudi Riyal",
    price:75.39
},
{
    name:"Russian Ruble",
    price:3.50
},
{
    name:"Qatari Riyal",
    price:77.56
},
{
    name:"Pound Sterling",
    price:351.06
},
{
    name:"New Zealand Dollar",
    price:176.16
},
{
    name:"Mexican Peso",
    price:16.14
},
{
    name:"Kuwaiti Dinar",
    price:919.63
},
{
    name:"Japanese Yen",
    price:2.06
},
{
    name:"Indian Rupee",
    price:3.43
},
{
    name:"Euro",
    price:305.91
},
{
    name:"Chinese Yuan",
    price:40.35
}]

let userOptions = await inquirer.prompt({
    name: "pkr",
    type: "input",
    message: "Input amount in PKR?",
});

let currencyOptions = await inquirer.prompt({
    name:"currencyoption",
    type:"list",
    message:"Select currency",
    choices:["United States Dollar(USD)","United Arab Emirates Dirham","Turkish Lira","Swedish Krona","Saudi Riyal",
    "Russian Ruble","Qatari Riyal","Pound Sterling","New Zealand Dollar","Mexican Peso","Kuwaiti Dinar","Japanese Yen",
    "Indian Rupee","Euro","Chinese Yuan"]
});
for(var i =0;i<currnecies.length;i++)
{
    if(currencyOptions.currencyoption==currnecies[i].name)
    {
        
        console.log(currnecies[i].name);
        console.log(chalk.bgBlueBright(chalk.green(`Today's Market Price:`))+currnecies[i].price);
        console.log(userOptions.pkr/currnecies[i].price);
        break;
    }
}
