import inquirer from "inquirer";

console.log("Connecting......");
setTimeout(() => { 
    console.clear();
    console.log("Connection Established")
    setTimeout(() => { 
    console.clear();
 }, 5000);
 }, 5000);

let options  = await inquirer.prompt([{
    name: "basicOptions",
    type: "list",
    message: "Please Choose An Option"
}]);
