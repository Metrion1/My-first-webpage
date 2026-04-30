let todoItems = []; //iinitially empty array to store todo items.

document.addEventListener('DOMContentLoaded', function () {

    //get dom items.
    const addbtn = document.getElementById('add-btn');
    const todoContainer = document.getElementById('todo-container');
    const todoInput = document.getElementById('todo-item');

    function renderTodoItems() {
        //clear the container before rendering the updated list.
        todoContainer.innerHTML = '';
        //loop through the todo items and create elements for each item.
        todoItems.forEach((singleTodo, index) => {
            console.log('singleTodo:', singleTodo); // singleTodo = {text: "buy groceries", completed: false}
            const todoDiv = document.createElement('div'); //create an HTML div element for each todo item in JS <div></div>.

            const todoText = document.createElement('span'); //create a span element to hold the text of the todo item.
            todoText.textContent = singleTodo.text; //set the text content of the span element to the text of the todo item.

            //change the style of the text based on whether the todo item is completed or not.
            if (singleTodo.completed) {
                todoText.classList.add('completed'); //add the 'completed' class to the span element if the todo item is marked as completed.
            }
            const completeBtn = document.createElement('button'); // <button></button>
            completeBtn.textContent = "✓"; //set the text of the button to check mark.
            completeBtn.addEventListener('click', function () { //add event listener to the complete button.
                //toggle the completed status of the todo item when the button is clicked.
                todoItems[index].completed = !todoItems[index].completed; //toggle the completed status of the todo item.
                renderTodoItems(); //call the render function to update the UI (recursion).
            });
            const removeBtn = document.createElement('button'); // <button></button>
            removeBtn.textContent = "✕"; //set the text of the button to cross mark.\
            removeBtn.addEventListener('click', function () { //add event listener to the remove button.
                todoItems.splice(index, 1); //remove the todo item from the array.
                renderTodoItems(); //call the render function to update the UI.
            });
            //append the text and buttons to the todo div.
            console.log('todoDiv:', todoDiv);
            console.log('todoText:', todoText);
            console.log('completeBtn:', completeBtn);
            console.log(removeBtn);
            todoDiv.appendChild(todoText); // <div><span>buy groceries</span></div>
            todoDiv.appendChild(completeBtn); // <div><span>buy groceries</span><button>✔</button></div>
            todoDiv.appendChild(removeBtn); // <div><span>buy groceries</span><button>✔</button><button>✖</button></div>

            //add the div to the container.
            todoContainer.appendChild(todoDiv); // <div id="todo-container"><div><span>buy groceries</span><button>✔</button><button>✖</button></div></div>
        });
    }

    //function to render the todo items on the page.
    addbtn.addEventListener('click', function () { //add event listener to the add button.
        const todoText = todoInput.value.trim(); //get the value from the input field and trim any whitespace.

        if (todoText !== '') {
            todoItems.push({ text: todoText, completed: false }); //add the new todo item to the array with a completed status of false.
            todoInput.value = ''; //clear the input field after adding the item.
            renderTodoItems(); //call the function to render the updated list of todo items.
        }
    });
});