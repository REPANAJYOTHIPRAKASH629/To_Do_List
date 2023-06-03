let taskForm = document.getElementById('task-form');
let inputElement = document.getElementById('task');
document.getElementById('add-task-btn').addEventListener('click', function(event) {
    event.preventDefault();
    let task = inputElement.value.trim();
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    taskList.unshift(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    displayTask();
});

// display task
let displayTask = () => {
    let ulTag = document.getElementById('task-list');
    let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    if (taskList.length !== 0) {
        let eachTask = '';
        for (let task of taskList) {
            eachTask += `<li class="list-group-item list-group-item-warning mb-2">
                        <span class="Font-Weight-bold">${task}</span>
                        <button class="close">
                        <i class="fa fa-times-circle"></i>
                        </button>
                        </li>`;
        }
        ulTag.innerHTML = eachTask;	
    }
};

displayTask();

// delete functionality
let ulTag = document.getElementById('task-list');
ulTag.addEventListener('click', function(event) {
    let targetElement = event.target;
    if (targetElement.classList.contains('fa-times-circle')) {
        let actualElement = targetElement.parentElement.parentElement;
        let selectedText = actualElement.innerText;
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList = taskList.filter((task) => {
            return task.trim() !== selectedText.trim();
        });
        localStorage.setItem('tasks', JSON.stringify(taskList));
        displayTask();
        window.location.reload();
    }
});
