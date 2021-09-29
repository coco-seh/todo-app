const todoBtn = document.querySelector('.plus-btn'),
    todoList = document.querySelector('.todo-list'),
    tasks= document.querySelector('.num');
    
    const todos_ = 'todos'
    let todos = [];
    let local = JSON.parse(localStorage.getItem(todos_))
    let newID = local === null ? todos.length : local[local.length - 1].id + 1
    
//todo항목 추가 함수
    function addTaskList(value){
    const todobox = document.createElement('div'),
    check = document.createElement('input'),
    delBtn = document.createElement('img'),
    todo  = document.createElement('input')

    todobox.classList.add('todo-box');
    check.setAttribute('type','checkbox');
    todo.classList.add('todo');
    // todo.setAttribute('contenteditable','true')
    delBtn.classList.add('delete-btn');
    delBtn.setAttribute('src', './assets/delete.svg')
    todo.id = newID

    
    const text = todo.innerText;
    
  if(value === ''){
    todobox.append(check, todo, delBtn)
    todoList.append(todobox)
    todo.focus()
  }else{
        todobox.append(check, todo, delBtn)
        todoList.append(todobox)
        todo.value = value.text
        todo.id = value.id
  }
   

    delBtn.addEventListener('click', () => deleteTodo(todo.id));
    todo.addEventListener('blur', () => inputBlurTodo(newID))
    todo.addEventListener('keypress', () => keypressTodo(newID))
    check.addEventListener('click', () => checkTodo())
}

//키프레스 엔터
function keypressTodo(id){
    if(event.code === 'Enter'){
    event.target.blur()
    }
}

//엔터를 치거나 블러시 항목 추가
function inputBlurTodo(id){
    console.log(newID);
    const target = event.target
    const todoObj = {
        text: target.value,
        id:newID
    }
    const todoLen =  todos.filter(todo => {
        return todo.id === parseInt(target.id)
    }).length;

   if(target.value !== '' && todoLen === 0){
        todos.push(todoObj)
        newID++
        saveTodo()
    }

    if(target.value === ''){
        target.parentNode.remove()
        let todoLeng = todos.findIndex(todo => todo.id === parseInt(target.id))
        if(todoLeng !== -1){
           todos.splice(todoLeng, 1)
           saveTodo()
        }
    }

    //수정하기
    const newItem = todos.filter(todo => todo.id === parseInt(target.id))[0]
    if(newItem !== undefined){
        if(newItem.text !== target.value){
            todos.filter((todo) => {
               if(todo.id === newItem.id){
                todo.text = target.value
                return todo;
               }
            });
            saveTodo()
        }
    }
}

//로드시 로컬스토리지 todo 불러오기
function onLoadTodo(){
    const item = localStorage.getItem(todos_)
    if(item !== null){
        todos = JSON.parse(item)
        for(let i=0; i < todos.length; i++){
            addTaskList(todos[i])
            // newID++
        }
    }
}

//task 개수
function onTasksNum(){
        tasks.innerText = todos.length
}

//로컬스토리지에 tood저장
function saveTodo(){
    localStorage.setItem(todos_, JSON.stringify(todos))
    onTasksNum()
}

function deleteTodo(id){
    target = event.target;
    target.parentNode.remove()
    
    todos.filter((todo,index) => {
        if(todo.id === parseInt(id)){
            todos.splice(index, 1)
            // todos.map((todo,index) => {
            //     todo.id = index;
            //     return todo
            // })
            saveTodo()
        }
    })

}

//체크박스 
function checkTodo(){
    const target = event.target;
    const check = target.parentNode.childNodes[1]
    if(target.checked){
        check.classList.add('checked');
        check.setAttribute('readonly', true)
    }else{
        check.removeAttribute('readonly')
    }
}


function init(){
    todoBtn.addEventListener('click', () => addTaskList(''))
    onLoadTodo()
    onTasksNum()
}

init()