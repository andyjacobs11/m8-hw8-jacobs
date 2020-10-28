var subMenu = document.getElementsByClassName('sub-menu');
console.log(subMenu);

function toggleSubmenu() {
    for( i = 0; i < subMenu.length; i++ ){
         dropdowns[i].classList.toggle('sub-menu');
     }

    // this.children[1].classList.toggle('show');
}

for( i = 0; i < navLinks.length; i ++){
    navLinks[i].addEventListener("mouseenter", toggleDropdown)
    navLinks[i].addEventListener("mouseleave", toggleDropdown)
}
