document.addEventListener('DOMContentLoaded', function() {

    const addTaskButton = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const tasksList = document.getElementById('tasks');
    const removeTaskButton = document.getElementById('removeTaskBtn');

    // Add a task when the "Add Task" button is clicked
    addTaskButton.addEventListener('click', function() {
        const taskContent = taskInput.value.trim();

        if(taskContent) {
            const listItem = document.createElement('li');
            listItem.textContent = taskContent;

            // Add the task to the list
            tasksList.appendChild(listItem);

            // Clear the input field after a task is added
            taskInput.value = '';
        }
    });

    // Remove a task when the "Remove" button is clicked
    removeTaskButton.addEventListener('click', function() {
        const taskList = document.getElementById('tasks');
        const listItems = taskList.children;

        // Loop through each list item and remove it
        for(let i = 0; i < listItems.length; i++) {
            const listItem = listItems[i];
            if(listItem.textContent !== '') {
                listItem.remove();
            }
        }
    });
});



