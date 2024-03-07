// create new task in localstorage
function addTask() {
    let txt = document.querySelector("#task_txt").value;

    if(txt != "") {
        let date = new Date();
        let dateAdded = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        //console.log(dateAdded);

        let taskObj = {
            taskText: txt,
            taskDate: dateAdded,
            taskDone: false
        }

        localStorage.setItem(crypto.randomUUID(), JSON.stringify(taskObj));
        //let item = localStorage.getItem("taskTxt");
        //console.log(item);
        showTasks();
    }
}

// set the task status to opposite
function completeTask(uid) {
    task = JSON.parse(localStorage.getItem(uid));
    task.taskDone = !task.taskDone;
    localStorage.setItem(uid, JSON.stringify(task));
    showTasks();
}

// delete a task from localstorage
function deleteTask(uid) {
    localStorage.removeItem(uid);
    console.log("removed: " + uid);
    showTasks();
}

// delete all tasks in localstorage
function clearTasks() {
    localStorage.clear();
    console.log("deleted all tasks!");
    showTasks();
}

function showTasks() {
    // clear previous listings
    lastList = document.querySelector("#tasks");  
    while(lastList.lastElementChild) {
        lastList.removeChild(lastList.lastElementChild);
    }
    lastList = document.querySelector("#tasks_done");  
    while(lastList.lastElementChild) {
        lastList.removeChild(lastList.lastElementChild);
    }

    let keys = Object.keys(localStorage);
    keys.forEach((item) => {
        // parse localstorage string into object
        let task = JSON.parse(localStorage.getItem(item));

        // set list according to task status
        if(task.taskDone == false) {
            list = document.querySelector("#tasks");  
        }
        else {
            list = document.querySelector("#tasks_done");
        }

        // create a li element for task
        let li = document.createElement("li");

        // create a div for date
        let liNode2 = document.createElement("div");
        let liTxt2 = document.createTextNode(task.taskDate);
        liNode2.appendChild(liTxt2);
        liNode2.classList.add("task_date");
        li.appendChild(liNode2);

        // create a div for task text
        let liNode = document.createElement("div");
        let liTxt = document.createTextNode(task.taskText);
        //console.log(task.taskText);
        liNode.appendChild(liTxt);
        li.appendChild(liNode);

        // create a div for action buttons
        let liNode3 = document.createElement("div");

        // create a done button
        let completeBtn = document.createElement("button");

        // set html attribute for button to localstorage key
        completeBtn.dataset.uid = item;

        // set the text button, depending on list
        if(task.taskDone == false) { completeBtn.innerText = "DONE"; }
        else { completeBtn.innerText = "Tilbage"; }

        // apply a function to button, wrapping it up in an anon function to pass attribute
        completeBtn.addEventListener("click", function() {
            completeTask(item);
        });
        liNode3.appendChild(completeBtn);

        // create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.dataset.uid = item;
        deleteBtn.innerText = "Slet";

        deleteBtn.addEventListener("click", function() {
            deleteTask(item);
        });

        // add button and class
        liNode3.appendChild(deleteBtn);
        liNode3.classList.add("task_action");
        li.appendChild(liNode3);

        // finally, add li to ul list
        list.appendChild(li);

        //console.log(task);
    });
}

document.querySelector("#task_btn").addEventListener("click", addTask);
document.querySelector("#clear_btn").addEventListener("click", clearTasks);

showTasks();