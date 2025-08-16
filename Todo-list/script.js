const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//array to store tasks

let tasks = [];

function storeTasks (){
    taskList.innerHTML = "";

    taskInput.forEach((task,index)=>{

        const li = document.createElement("li");

        //task enter

        const span = document.createElement("span");

        span.textContent = task.title;

        if(task.completed){
            span.style.textDecoration ="line-through";
            span.style.color = "gray";
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

