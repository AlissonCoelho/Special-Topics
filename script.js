let screens = ['component1','component2'];

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
}