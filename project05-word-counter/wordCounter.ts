import inquirer from "inquirer"

async function name() {
    
}

async function wordCounter(){
    
    console.log("Word Counter")
let txt = await inquirer.prompt({
    name:"txt",
    type:"input",
    message:"Enter Text:"
});
    let txt1:string = txt.txt.toString();
    const txtArray = txt1.split(" ");
    console.log(`Total number of words in that line are: ${txtArray.length}`)
}

wordCounter();


