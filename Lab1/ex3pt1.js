const MyTasks = [];

let addTask = (task)=>{
    let length = MyTasks.push(task);
    console.log("The task " + task + " was completed successfully");
    return length;
}

let listAllTasks = ()=>{
    MyTasks.forEach((item) => {
        console.log(item)
        
    });
}

let deleteTasks = (task)=>{
    let index = MyTasks.indexOf(task);
        if(index > -1){
            MyTasks.splice(index, 1);
            console.log("The task " + task + " removed from tasks successfully")
        } else{
            console.log("The task " + task + " not in tasks")
        }   
    }


addTask("Learn js!");
listAllTasks();
deleteTasks("Learn js!");


