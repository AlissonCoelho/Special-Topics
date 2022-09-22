//Navagtion
onload = () => {
    let tabs = document.querySelectorAll('.nav .tab');
  
    const show = (elem) => {
      if (elem) {
        for (let i = 0; i < tabs.length; i++) tabs[i].classList.remove('active');
        elem.classList.add('active');
      }
  
      for (let i = 0; i < tabs.length; i++) {
        let comp = tabs[i].getAttribute('for');
        if (tabs[i].classList.contains('active'))
          document.querySelector('#' + comp).classList.remove('hidden');
        else document.querySelector('#' + comp).classList.add('hidden');
      }
    };
  
    for (let i = 0; i < tabs.length; i++)
      tabs[i].onclick = (e) => {
          show(e.target);
      };
  
      show();
  };
  //
  let tasks = [
    { id: '1', description: 'Pay energy account'},
    {id: '2', description: 'Take car for serviceCar'},
    {id: '3', description: 'Prepare class next week'}
  ]

  onload = () => {
    showTasks();
  }

  const showTasks = () => {
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';
    tasks.forEach ( (t)=>{
        let elemTask = document.createElement('li');
        elemTask.innerHTML = t.description;
        elemTask.onclick = ()=>{
            //Edit task
        }
        taskList.appendChild(elemTask);
    })
    if(tasks.length>0){
        taskList.classList.remove('hidden');
        document.querySelector('#blank').classList.add('hidden');
    }
    else{
        taskList.classList.add('hidden');
        document.querySelector('#blank').classList.remove('hidden');
    }
    document.querySelector('#state').innerHTML = tasks.length;
  }