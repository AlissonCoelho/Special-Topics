//When app is load
onload = () => {
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
        active('screen1');
    }
    document.querySelector('#btnInc').onclick = () => {
        addTask(document.querySelector('#InputNewTask').value);
        
    }
}
let tasks = [
    { id: '1', description: 'Pay energy account' },
    { id: '2', description: 'Take car for serviceCar' },
    { id: '3', description: 'Prepare class next week' }
]


//Function to show tasks
const showTasks = () => {
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';
    tasks.forEach((t) => {
        let elemTask = document.createElement('li');
        elemTask.innerHTML = t.description;
        elemTask.onclick = () => {
            //Edit task
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
const addTask = () =>{
    description = document.querySelector('#InputNewTask');
    if (description.value != ''){
        tasks.push(
            {
                id: Math.random().toString().replace('0.',''),
                description: description.value
            }
        )
        active('screen1');
        showTasks();
        description.value = '';
    }
}

const monitorInputField = (e) =>{
    let btnInc = document.querySelector('#btnInc');
    if(e.target.value.length > 0){
        btnInc.disabled = false;
    }
    else{
        btnInc.disabled = true;
    }
}
