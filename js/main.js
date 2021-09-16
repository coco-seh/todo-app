const todoBtn = document.querySelector('.plus-btn'),
    todoList = document.querySelector('.todo-list');
    
    const todos_ = 'todos'
    let todos = [];
    let newID = todos.length + 1;
    
function addTaskList(){
    const todobox = document.createElement('div'),
    check = document.createElement('input'),
    todo = document.createElement('div'),
    delBtn = document.createElement('img');

    todobox.classList.add('todo-box');
    check.setAttribute('type','checkbox');
    todo.classList.add('todo');
    todo.setAttribute('contenteditable','true')
    delBtn.classList.add('delete-btn');
    delBtn.setAttribute('src', './assets/delete.svg')
    todo.id = newID

    
    const text = todo.innerText;
    
  
    todobox.append(check, todo, delBtn)
    todoList.append(todobox)
    todo.focus()
    
   

    delBtn.addEventListener('click', deleteTodo);
    todo.addEventListener('focus', () => focusTodo(newID))
    todo.addEventListener('blur', () => inputBlurTodo(newID))
    todo.addEventListener('click', () => inputClickTodo(todo.id))
    todo.addEventListener('keypress', () => keypressTodo(newID))
}

function inputClickTodo(id){
    newID = parseInt(id)

    const text = event.target.innerText;
    console.log(text);
}


function focusTodo(id){
    if(event.blur){
        inputBlurTodo(id)
        }
}
function keypressTodo(id){
    if(event.code === 'Enter'){
    inputBlurTodo(id)
    
    }
}
function inputBlurTodo(id){
    const target = event.target
    const text = target.innerText
    event.target.blur()
    const todoObj = {
        text,
        id:newID
    }
    const todoLen =  todos.filter(todo => todo.id === id).length;

   if(text !== '' && todoLen === 0){
        todos.push(todoObj)
        newID++
        saveTodo()
    }

    if(text === ''){
        target.parentNode.remove()
    }
}


function saveTodo(){
    localStorage.setItem(todos_, JSON.stringify(todos))
}

function deleteTodo(){
    console.log('delete');
}


function init(){
    todoBtn.addEventListener('click', addTaskList)
}

init()