const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//array to store tasks

let tasks = [];

function storeTasks (){
    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li = document.createElement("li");

        //task enter

        const span = document.createElement("span");

        span.textContent = task.title;

        if(task.completed){
            span.style.textDecoration ="line-through";
            span.style.color = "green";
        }

        //completion button

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "☑️";
        completeBtn.classList.add("complete");
        completeBtn.onclick = () =>toggleTask(index);

        //delete button

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete");
        deleteBtn.onclick = ()=> deleteTask(index);

        li.appendChild(span);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    
}  );

}

//add a new task

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskTitle = taskInput.value.trim();

    if(taskTitle !== ""){
        tasks.push({title:taskTitle,completed:false});
        taskInput.value = "";
        storeTasks();
    }
});

//complete or incomplete

function toggleTask(index){
    tasks[index].completed =!tasks[index].completed;
    storeTasks();

}

//deletion of tasks

function deleteTask(index){
    tasks.splice(index,1);
    storeTasks();
}

storeTasks();
