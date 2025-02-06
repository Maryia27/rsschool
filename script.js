document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("taskInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") addTask();
    });
});

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let li = createTaskElement(taskText, false);
    document.getElementById("todoList").appendChild(li);
    input.value = "";
}

function createTaskElement(taskText, isCompleted) {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isCompleted;
    checkbox.onchange = function () {
        moveTask(li, checkbox.checked);
    };

    let span = document.createElement("span");
    span.textContent = taskText;
    span.contentEditable = false;

    let editBtn = document.createElement("button");
    editBtn.textContent = "Редактировать";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
        span.contentEditable = !span.isContentEditable;
        span.focus();
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Удалить";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    return li;
}

function moveTask(taskElement, isCompleted) {
    if (isCompleted) {
        document.getElementById("completedList").appendChild(taskElement);
    } else {
        document.getElementById("todoList").appendChild(taskElement);
    }
}
