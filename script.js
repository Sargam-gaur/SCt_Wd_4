
// Get elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Initialize tasks array
let tasks = [];

// Add event listeners
addTaskBtn.addEventListener('click', addTask);

// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push(taskText);
    renderTasks();
    taskInput.value = '';
  }
}

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskHtml = `
      <li>
        <span>${task}</span>
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
    taskList.insertAdjacentHTML('beforeend', taskHtml);
  });
}

// Function to delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
