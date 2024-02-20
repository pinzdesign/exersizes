console.log("ready");

function addTask() {
    let txt = document.querySelector("#task_txt").value;

    let date = new Date();
    let dateAdded = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

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

function completeTask(uid) {
    task = JSON.parse(localStorage.getItem(uid));
    task.taskDone = !task.taskDone;
    localStorage.setItem(uid, JSON.stringify(task));
    showTasks();
}

function deleteTask(uid) {
    localStorage.removeItem(uid);
    console.log("removed: " + uid);
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
        let task = JSON.parse(localStorage.getItem(item));

        if(task.taskDone == false) {
            list = document.querySelector("#tasks");  
        }
        else {
            list = document.querySelector("#tasks_done");
        }
        let liNode = document.createElement("li");
        let liTxt = document.createTextNode(task.taskText);
        //console.log(task.taskText);
        liNode.appendChild(liTxt);
        list.appendChild(liNode);

        let liNode2 = document.createElement("li");
        let liTxt2 = document.createTextNode(task.taskDate);
        liNode2.appendChild(liTxt2);
        list.appendChild(liNode2);

        let liNode3 = document.createElement("li");

        let deleteBtn = document.createElement("button");
        deleteBtn.dataset.uid = item;
        deleteBtn.innerText = "Slet";
        deleteBtn.addEventListener("click", function() {
            deleteTask(item);
        });
        liNode3.appendChild(deleteBtn);

        let completeBtn = document.createElement("button");
        completeBtn.dataset.uid = item;

        if(task.taskDone == false) { completeBtn.innerText = "DONE"; }
        else { completeBtn.innerText = "Return"; }

        completeBtn.addEventListener("click", function() {
            completeTask(item);
        });
        liNode3.appendChild(completeBtn);

        list.appendChild(liNode3);

        //console.log(task);
    });
}

let task_btn = document.querySelector("#task_btn");
task_btn.addEventListener("click", addTask);

showTasks();