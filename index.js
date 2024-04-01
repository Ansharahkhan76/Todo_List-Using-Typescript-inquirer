import inquirer from "inquirer";
import chalk from 'chalk';
let todo_list = [];
let condition = true;
console.log(chalk.green.bold("\n\t Welcome to my Todo_List project\n"), chalk.blue("\t      ---ANSHARAH KHAN---"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter Your New Task : "
        }
    ]);
    todo_list.push(addTask.task);
    console.log(`${addTask.task} Task Added in Todo_list Successfully.`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more Task?",
            default: false
        }
    ]);
    condition = addMoreTask.addMore;
}
;
console.log(`Your Updated Todo_List : ${todo_list}`);
