// SELECTORS
const todoInput = document.querySelector("#createTodo");
const todoList = document.querySelector(".todo-list")
const searchTodo = document.querySelector("#searchField");

// EVENT LISTENERS
todoInput.addEventListener("keypress", addTodo);
todoList.addEventListener('click', deleteCheck);
searchTodo.addEventListener("keypress", listen);

function listen(event) {
    let searchItem = (event.target.value);
    // console.log(searchItem);

    // searchTodo.forEach(function e() {
    //     if (todoList.value == searchItem) {
    //         console.log(todoList.value);
    //     }
    // })
}

// FUNCTIONS

function addTodo(event) {
    if (event.which === 13) {

        // LETS GRAB THE VALUE

        let todoText = (event.target.value);

        console.log(todoText);

        event.preventDefault();

        // TODO DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');

        // CREATE LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todoText;

        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        // CHECK BUTTON
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        // DELETE BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        // APPEND TO LIST

        todoList.appendChild(todoDiv);

        // CLEAR TODO VALUE
        todoInput.value = "";
    }



}

// CREATE FUNCTION FOR DELETECHECK
function deleteCheck(e) {
    const item = e.target;

    // FOR DELETE
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;

        // ANIMATION
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    // FOR CHECKED
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }



}

function search(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        if ((e.target.value).contains(todo.value)) {
            todoList.value = todos;
        }

    })

}