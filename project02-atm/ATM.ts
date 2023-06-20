import inquirer from "inquirer";

let accounts = [
    {
        name:"Jamal",
        id:112233,
        cash:15000,
        pin:1122,
        type: "Current"
    },
    {
        name:"Ammar",
        id:123456,
        cash:78000,
        pin:3473,
        type: "Current"
    },
    {
        name:"Arbab",
        id:109876,
        cash:40000,
        pin:5253,
        type: "Current"
    },
    {
        name:"Asif",
        id:786542,
        cash:65000,
        pin:7070,
        type: "Current"
    },
    {
        name:"Maham",
        id:764323,
        cash:23000,
        pin:5435,
        type: "Current"
    },
    {
        name:"Malaika",
        id:665544,
        cash:56000,
        pin:7862,
        type: "Current"
    },
    {
        name:"Sana",
        id:334466,
        cash:23500,
        pin:7171,
        type: "Saving"
    },
    {
        name:"Shahzaib",
        id:453436,
        cash:100000,
        pin:7007,
        type: "Saving"
    },
    {
        name:"Kashif",
        id:450981,
        cash:245000,
        pin:5642,
        type: "Current"
    },
    {
        name:"Adnan",
        id:342351,
        cash:200000,
        pin:2772,
        type: "Saving"
    },
]

function findIndex(pinid:number): number {
    for(var i =0;i<=accounts.length;i++)
    {
        if(pinid==accounts[i].id)
        {
            return i;
        }
    }
    return -1;
}

const checkBalance=(num:number)=>
{
    console.clear();
    return accounts[findIndex(num)].cash;
}
const withdraw=(w_cash:number,ind:number)=>
{
    var remaining = "Remaining Amount: ";
    if(w_cash>accounts[ind].cash)
    {
        return "Insufficient Balance";
    }
    if(w_cash%500!=0)
    {
        return "Try again will multiply of 500"
    }
    accounts[ind].cash = accounts[ind].cash - w_cash;
    return remaining + accounts[ind].cash;
}

 let option1 = await inquirer.prompt(
    {
        name:"options",
        type:"list",
        message:"Welcome \n What would you like to do?",
        choices:["Current",
        "Saving"]
    }
);

if(option1.options==="Current" )
{
    console.clear();
    console.log("Current Account Details");
    console.log("------------------------------------------------------------------------");
    let pin = await inquirer.prompt({
        name:"pin",
        type: "number",
        message:"Enter Pin: "
    });
    if(findIndex(pin.pin)!=-1 && accounts[findIndex(pin.pin)].type==="Current")
    {
        let secondOption = await inquirer.prompt(
            {
                name:"secondOption",
                type: "list",
                message: "Select Option:",
                choices: ["CheckBalance","Withdraw","Cancel"]
            }
        );
        if(secondOption.secondOption==="CheckBalance")
        {
            console.log(`Current Balance: ${checkBalance(pin.pin)}`);
        }
        if(secondOption.secondOption==="Withdraw") 
        {
            let w_cash = await inquirer.prompt(
                {
                    name:"w_cash",
                    type:"number",
                    message:"Enter Amount:"
                }
            );
            console.log(withdraw(w_cash.w_cash,findIndex(pin.pin)));
        }
        if(secondOption.secondOption==="Cancel")
        {
            console.log("Please Collect Your Card.")
        }
    }
}

if(option1.options==="Saving")
{
    console.clear();
    console.log("Saving Account Details");
    console.log("------------------------------------------------------------------------");
    let pin = await inquirer.prompt({
        name:"pin",
        type: "number",
        message:"Enter Pin: "
    });
    if(findIndex(pin.pin)!=-1 && accounts[findIndex(pin.pin)].type==="Saving")
    {
        let secondOption = await inquirer.prompt(
            {
                name:"secondOption",
                type: "list",
                message: "Select Option:",
                choices: ["CheckBalance","Withdraw","Cancel"]
            }
        );
        if(secondOption.secondOption==="CheckBalance")
        {
            console.log(`Current Balance: ${checkBalance(pin.pin)}`);
        }
        if(secondOption.secondOption==="Withdraw")
        {
            let w_cash = await inquirer.prompt(
                {
                    name:"w_cash",
                    type:"number",
                    message:"Enter Amount:"
                }
            );
            withdraw(w_cash.w_cash,findIndex(pin.pin))
        }
        if(secondOption.secondOption==="Cancel")
        {
            console.log("Please Collect Your Card.")
        }
    }
}





