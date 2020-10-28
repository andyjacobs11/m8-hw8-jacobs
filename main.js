var menuLabel = document.getElementsByClassName('main-menu-labels');

var subMenu = document.getElementById('sub-menu');

//Hover submenu
document.getElementsByClassName("main-menu-labels").addEventListener("mouseover", function () {
    subMenu.classList.remove('hide');
});