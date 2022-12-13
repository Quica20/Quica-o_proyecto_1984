window.onload = function() {  
    var btn_menu = document.querySelector('.btn_menu') 
    if (btn_menu) { 
        btn_menu.addEventListener('click', () => { 
            var navBarItems = document.querySelector('.navBarItems') 
            navBarItems.classList.toggle('show')
        }) 
    } 
}

/* addEventListener('DOMContentLoaded', () => {
    var btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
        var navBarItems = document.querySelector('.navBarItems')
        menu_Items.classList.toggle('show')
        })
    }
}) */