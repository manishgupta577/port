const menubtn = document.querySelector('.menu-btn');
const menu   = document.querySelector('.menu');
const navmenu = document.querySelector('.menu-nav');
const picture = document.querySelector('.menu-picture');
const navitems = document.querySelectorAll('.nav-item');

let showMenu = false;

function toggleMenu(){
    if(!showMenu){
        menubtn.classList.add('close');
        menu.classList.add('show');
        navmenu.classList.add('show');
        picture.classList.add('show');
        navitems.forEach(item=>item.classList.add('show'));
        showMenu=true;
    }
    else{
        menubtn.classList.remove('close');
        menu.classList.remove('show');
        navmenu.classList.remove('show');
        picture.classList.remove('show');
        navitems.forEach(item=>item.classList.remove('show'));
        showMenu=false;
    }
}

menubtn.addEventListener('click',toggleMenu);