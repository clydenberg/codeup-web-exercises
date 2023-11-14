

/*
TODO Create a simple to-do app. When the user submits the form with the id to-do-form, a new list item with a class of to-do-item should be created on the web page, containing the text the user submitted. You may use the following model for the to-do item code:
*/

/*TODO Clicking on the Done button should delete the list item from the page. To accomplish this, you should use a technique for adding event listeners to dynamically created elements.
*/

/*
BONUSES
*/

/* TODO If the user tries to add a to-do without any text, tell the user that the to-do's text cannot be blank and do not add the to-do.
*/

/*TODO Limit the to-dos to a maximum of 10. When there are 10 to-dos, if the user tries to add another one, give a notification to complete one or more to-dos before adding new ones.
*/

/* TODO Feel free to modify the style, and even to change the structure of the page. For example, you can use cards instead of list items.

 */

let todos = [];

const renderTodoElement = (todo) => {
    const listItem = document.createElement("li");
    listItem.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
    listItem.innerHTML = `
        <p class="m-0">${todo}</p>
        <button class="btn btn-danger" data-done>Done</button>
    `;
    const deleteBtn = listItem.querySelector("button[data-done]");
    deleteBtn.addEventListener("click", (e) => {
        listItem.remove();
        const index = todos.indexOf(todo);
        if (index > -1) {
            todos.splice(index, 1);
        }
    });
    return listItem;
};
const updateTodos = (todos) => {
    document.querySelector("#to-do-list").innerHTML = "";
    const itemsFragment = document.createDocumentFragment();
    for (let todo of todos) {
        itemsFragment.appendChild(renderTodoElement(todo));
    }
    document.querySelector("#to-do-list").appendChild(itemsFragment);
};
const addTodo = (todo, todos) => {
    const userInput = document.querySelector("#to-do").value;
    todos.push(todo);
    updateTodos(todos);
    return todos;
};

// MAIN
(() => {
    updateTodos(todos);
    const addBtn = document.querySelector("button[data-add]");
    const userInput = document.querySelector("#to-do");
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        todos = addTodo(userInput.value, todos);
    });
})();

// const createToDoElement = todo =>{
//     const listItem = document.createElement(`li`);
//     listItem.add(``)
// }
// const updateTodos = todos =>{
//     document.querySelector(`#to-do-list`).innerHTML = ``;
//     const itemFragment = document.createDocumentFragment();
//     for (let todo of todos){
//         itemFragment.appendChild(createToDoElement(todo));
//     }
//     document.querySelector(`#to-do-list`).appendChild(itemFragment);
// }
//
// const addTodo = (todo, todos) => {
//     const userInput = document.querySelector(`#to-do`).value;
//     todos.push(todo);
//     updateTodos(todos);
//     return todos;
// }
//
// const toDoInput = document.querySelector(`#to-do-form`);
// const toDoForm = toDoInput.parentElement;
// const handleUserInput = (event) => {
//     event.preventDefault();
//     console.log(toDoInput.value);
//     toDoInput.value = '';
// }
//
// const renderToDoElement = form => {
//
//     const newToDoItem = document.createElement(`ul`);
//     newToDoItem.innerHTML = `
//     <li class="to-do-item list-group-item d-flex justify-content-between align-items-center">
//         <p class="m-0">Finish this exercise</p>
//         <button data-doneBtn class="btn btn-danger">Done</button>
//     </li>
//     `;
//     const doneBtn = form.querySelector(`button[data-doneBtn]`);
//     doneBtn.addEventListener(`click`, (e)=>{
//         newToDoItem.remove();
//     });
//     form.appendChild(newToDoItem);
//     // return newToDoItem;
// };
//
// const formSubmit = document.querySelector(`button[data-submit]`);
//     formSubmit.addEventListener(`click`, (e)=>{
//
//     });
//
// (()=>{
//     let todos = [];
//     updateTodos(todos);
//     // toDoForm.addEventListener('submit', handleUserInput);
// })();


