let taskInput=document.querySelector("#task");
let taskList=document.querySelector("#tasks");
let addTaskBtn=document.querySelector("#addtaskBtn");
addTaskBtn.addEventListener("click",()=>{
    let newTask=taskInput.value.trim();
    if(newTask!==''){
        let taskContainer=document.createElement("div");
        taskContainer.classList.add("checklist");
        let task=document.createElement("span");
        task.innerHTML=newTask;
        let deleteBtn=document.createElement("button");
        deleteBtn.innerHTML="delete";
        deleteBtn.addEventListener("click",()=>{
            taskList.removeChild(taskContainer)
        })
        taskContainer.appendChild(task);
        taskContainer.appendChild(deleteBtn);
        taskList.appendChild(taskContainer);
        taskInput.value='';
    }
    else{
        alert("first enter task");
    }
})
