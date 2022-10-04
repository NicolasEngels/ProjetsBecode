var readline = require('readline');
  
var rl = readline.createInterface(process.stdin, process.stdout);

var tasks = ["task 1","task 2","task 3","task 4","task 5",];

home();

function home(){
    rl.question('\nWelcome to your task manager, Press:\n\n  1. to see all your tasks\n  2. to add a task\n  3. to delete a task\n  4. to mark a task as done\n  5. to Exit the task manager\n\n', (tasknbr) => {
        switch (tasknbr){
            case "1":
                seeTask();
                break;
            case "2":
                addTask();
                break;
            case "3":
                deleteTask();
                break;
            case "4":
                taskDone();
                break;
            case "5":
                exit();
                break;
        }
    });
}


function seeTask(){
    console.log("--TASK LIST--");
    console.log("");
    if (tasks.length > 0){
        for (task in tasks){
            console.log(" "+ (task) +". " +tasks[task]);
        }
    }else{
        console.log(" Task list empty");
    }
    
    console.log("");
    home();
}

function addTask(){
    console.log("--ADD TASK--");
    console.log("");
    rl.question(' Wich task do you want to add ? \n\n', (taskname) => {
        tasks.push(taskname);
        console.log( " " + taskname + " : added to task list");
        home();
    });
}

function deleteTask(){
    console.log("--DELETE TASK--");
    console.log("");
    rl.question(' Wich task do you want to delete ? \n\n', (taskname) => {
        if (tasks.includes(taskname)){
            for (m in tasks){
                if(tasks[m]===taskname){
                    tasks.splice(m, 1);
                    console.log( " " + taskname + " : removed from task list");
                }
            }
        }else{
            console.log(taskname + " is not in task list");
        }
        home();
    });
}

function taskDone(){
    console.log("--DONE TASK--");
    console.log("");
    rl.question(' Wich task is done ? \n\n', (taskname) => {
        for (m in tasks){
            if(tasks[m]===taskname){
                tasks.splice(m, 1, taskname+"(done)");
                console.log( " " + taskname + " : is marked as done in task list");
            }
        }
        home();
    });
}

function exit(){
    rl.close();
}