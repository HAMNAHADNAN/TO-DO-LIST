// Function to retrieve tasks from local storage
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Function to save tasks to local storage
function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const newTask = document.getElementById('newTask').value;
    if (newTask.trim() !== '') {
        const tasks = getTasks();
        tasks.push(newTask);
        saveTasks(tasks);
        document.getElementById('newTask').value = '';
        renderTasks();
    }
}

// Function to edit a task
function editTask(index) {
    const tasks = getTasks();
    const updatedTask = prompt('Edit Task:', tasks[index]);
    if (updatedTask !== null && updatedTask.trim() !== '') {
        tasks[index] = updatedTask;
        saveTasks(tasks);
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
}

// Initial render
renderTasks();
