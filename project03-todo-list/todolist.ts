import chalk from "chalk"
import inquirer from "inquirer"

console.log('TODO App');
type taskobj = {
    name:string,
    description:string
}
let options = await inquirer.prompt({
    name:"options", 
    type:"list",
    message:"What do you want to do?",
    choices:["Show tasks","Add task","Exit"]
});
let todolist = [{
    name:"todo1",
    description:"Do assignment before time"
}];
if(options.options=="Show tasks")
{
    console.log(chalk.green("Showing Tasks"));
    todolist.forEach(p=>{
        console.log(p.name);
        console.log(p.description)
    })
}
if(options.options=="Add task")
{
    console.log(chalk.green("Add Task"));
    let add_name = await inquirer.prompt({
        name:"name",
        type:"input",
        message:"Enter name:"
    })
    let add_description = await inquirer.prompt({
        name:"description",
        type:"input",
        message:"Type desctiption"
    });
    let newTask : taskobj
    {
        newTask = {name:add_name.name,
            description : add_description.description
        }
    }
    todolist.push(newTask)
}
if(options.options=="Exit")
{
    console.clear();
    console.log(chalk.green("Exiting"));
}

