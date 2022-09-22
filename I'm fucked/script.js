let tasks = []
//When app is load
onload = () => {

    //Load local storage
    const t = JSON.parse(localStorage.getItem('tasks'));
    //if t diferente of null
    if(t)
        tasks = t;

    showTasks();
    //Cath input text on field of input task
    document.querySelector('#InputNewTask').oninput = monitorInputField;
    document.querySelector('#btnAdd').onclick = () => {
        active('screen2');
        document.querySelector('#InputNewTask').focus();
    }
    document.querySelector('#state').onclick = () => {
        if (tasks.length > 0) {
            active('screen1');
        }
    }
    document.querySelector('#btnCanc1').onclick = () => {
        document.querySelector('#InputNewTask').value = '';
        document.querySelector('#InputNewTask').removeAttribute('data-id')
        active('screen1');
    }
    document.querySelector('#btnCanc2').onclick = () => {
        document.querySelector('#InputEditTask').value = '';
        active('screen1');
    }
    document.querySelector('#btnInc').onclick = () => {
        addTask(document.querySelector('#InputNewTask'));
    }
    document.querySelector('#btnEdit').onclick = () => {
        ediTask(document.querySelector('#InputEditTask'));
    }
    document.querySelector('#btnDel').onclick = () => {
        delTask(document.querySelector('#InputEditTask'));
    }
}

//Function to show tasks
const showTasks = () => {
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';
    tasks.forEach((t) => {
        let elemTask = document.createElement('li');
        elemTask.innerHTML = t.description;
        elemTask.setAttribute('data-id', t.id);
        elemTask.onclick = () => {
            let field = document.querySelector('#InputEditTask');
            active('screen3');
            field.value = t.description;
            //save ID on field
            field.setAttribute('data-id', t.id);
            field.focus();
        }
        taskList.appendChild(elemTask);
    })
    if (tasks.length > 0) {
        taskList.classList.remove('hidden');
        document.querySelector('#blank').classList.add('hidden');
    }
    else {
        taskList.classList.add('hidden');
        document.querySelector('#blank').classList.remove('hidden');
    }
    document.querySelector('#state').innerHTML = tasks.length;
}

//Active screens
const active = (comp) => {
    let screenList = document.querySelectorAll('body > .component');
    screenList.forEach((c) => {
        c.classList.add('hidden')
    }
    );
    document.querySelector('#' + comp).classList.remove('hidden');
}

//Add Task
const addTask = (InputNewTask) => {
    //InputNewTask = document.querySelector('#InputNewTask');
    if (InputNewTask.value != '') {
        tasks.push(
            {
                id: Math.random().toString().replace('0.', ''),
                description: InputNewTask.value
            }
        )
        active('screen1');
        saveTasks();
        showTasks();
        InputNewTask.value = '';
    }
}

//Edit Task
const ediTask = (InputEditTask) => {
    if (InputEditTask.value != '') {
        let idTask = InputEditTask.getAttribute('data-id');
        let i = tasks.findIndex((t) => t.id == idTask);
        tasks[i].description = InputEditTask.value
        InputEditTask.value = '';
        InputEditTask.removeAttribute('data-id');
        active('screen1');
        saveTasks();
        showTasks();
    }
}

//Delete Task
const delTask = (InputEditTask) => {
    if (InputEditTask.value != '') {
        let idTask = InputEditTask.getAttribute('data-id');
        tasks = tasks.filter((t)=> t.id != idTask);
        InputEditTask.value = '';
        InputEditTask.removeAttribute('data-id');
        active('screen1');
        saveTasks();
        showTasks();
    }
}

const saveTasks = () =>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Monitoing the input field is editing
const monitorInputField = (e) => {
    let btnInc = document.querySelector('#btnInc');
    if (e.target.value.length > 0) {
        btnInc.disabled = false;
    }
    else {
        btnInc.disabled = true;
    }
}
