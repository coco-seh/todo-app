const list = document.querySelector('.todo-list'),
    task = document.querySelector('.num'),
    btn = document.querySelector('.plus-btn');
    let value = []
        
    
    
    function onHandelPlus(){
        const div = document.createElement('div'),
        div2 = document.createElement('div'),
        checkbox = document.createElement('input'),
        div4 = document.createElement('div'),
        div5 = document.createElement('div'),
        img = document.createElement('img');
    
        div.classList.add('todo-box')
        div2.classList.add('todos')
        checkbox.classList.add('check')
        checkbox.setAttribute('type','checkbox')
        div4.classList.add('todo')
        div4.setAttribute('contenteditable','true')
        div5.classList.add('delete-btn');
        img.setAttribute('src', './assets/delete.svg')
        
        div5.append(img)
        div2.append(checkbox)
        div2.append(div4)
        div.append(div2)
        div.append(div5)
        list.append(div)
        div4.focus()
        div4.addEventListener('blur', onHandelBlur)
        div4.addEventListener('keydown', onHandelPress)
    }

    function onLoadTaskList(){
        const todos = JSON.parse(localStorage.getItem('todo'));
        if(todos === null ){
            //
        }else{
            for(let i = 0; i < todos.length; i++){
                const div = document.createElement('div'),
                div2 = document.createElement('div'),
                checkbox = document.createElement('input'),
                div4 = document.createElement('div'),
                div5 = document.createElement('div'),
                img = document.createElement('img');
            
                div.classList.add('todo-box')
                div2.classList.add('todos')
                checkbox.classList.add('check')
                checkbox.setAttribute('type','checkbox')
                div4.classList.add('todo')
                div4.setAttribute('contenteditable','true')
                div5.classList.add('delete-btn');
                img.setAttribute('src', './assets/delete.svg')
                
                list.append(div)
                div.append(div2, div5)
                div2.append(checkbox, div4)
                div5.append(img)
                div4.innerText = todos[i]
            }
        }

    }

    function onHandelBlur(event){
        let message = event.target.innerText;
        if(message === ''){
           event.target.parentNode.parentNode.remove()
        }else{
            value.push(message)
        }

        localStorage.setItem('todo', JSON.stringify(value))
        onTasksNum()
    }

    function onHandelPress(event){
        console.log(event.key);
        if(event.key === 'Enter'){
            let message = event.target.innerText;
            if(message === ''){
               event.target.parentNode.parentNode.remove()
            }else{
                value.push(message)
            }
    
            localStorage.setItem('todo', JSON.stringify(value))
            onTasksNum()
            event.target.blur()
        }
       
    }

    function onTasksNum(){
        let leng = JSON.parse(localStorage.getItem('todo'))
        
        if(leng === null){
            task.innerText = '0'
        }else{
            task.innerText = leng.length;
        }
    }

    function onLoadData(){
        let loadList = JSON.parse(localStorage.getItem('todo'))
        if(loadList !== null){
        for(let i = 0; i < loadList.length; i++){
            value.push(loadList[i])
        }}
    }


    function init(){
        btn.addEventListener('click', onHandelPlus);
        onTasksNum()
        onLoadData()
        onLoadTaskList()
    }


    init()
