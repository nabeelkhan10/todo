//  Selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const options = document.querySelector('.filter-todo');

//  Event listeners
todoButton.addEventListener('click', addtodo);
todoList.addEventListener('click', deleteCheck);
options.addEventListener('click', filter);
//  Functions
function addtodo(event) {
    //prevents form from submitting
    event.preventDefault();

    //create div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //create buttons
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('complete-btn');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteBtn);

    //append to todo-list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = "";
}

//delete item
function deleteCheck(event) {
    var todo = ((event.target).parentElement);
    if ((event.target).classList[0] === 'delete-btn') {
        todo.classList.add('fall');
        todo.addEventListener('transitionend', () => {
            todo.remove();
        });
    }
    if ((event.target).classList[0] === 'complete-btn') {
        todo.classList.add('completed');
    }
    filter();
}

function filter(e) {
    const todos = todoList.childNodes;
    todos.forEach(todo => {
        switch (options.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
        }
    });
}