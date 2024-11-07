function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';

    // Remove the GIF
    const gifContainer = document.getElementById('gif-container');
    gifContainer.style.display = 'none';
}
