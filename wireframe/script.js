let screens = ['component1','component2','component3','component4'];

const show =(comp) => {
    screens.forEach((c)=> {
        document.querySelector('#'+c).classList.add('hidden')
    })
    document.querySelector('#'+comp).classList.remove('hidden')
};

const active = (elem) => {
    let brothers = elem.parentNode.children;
    for(let i=0; i<brothers.length; i++){
        brothers[i].classList.remove('active');
        elem.classList.add('active');
    }
}

onload = () => {
    document.querySelector('#tab1').onclick = (e) => {
        show('component1');
        active(e.target);
    }
    document.querySelector('#tab2').onclick = (e) => {
        show('component2');
        active(e.target);
    }
    document.querySelector('#tab3').onclick = (e) => {
        show('component3');
        active(e.target);
    }
    document.querySelector('#tab4').onclick = (e) => {
        show('component4');
        active(e.target);
    }
}

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