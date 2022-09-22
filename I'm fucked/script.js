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