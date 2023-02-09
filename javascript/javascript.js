const sideMenu = document.getElementById("sidemenu") ;

function openNav() {
     sideMenu.style.right = "0";
     document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
}

function closeNav() {
     sideMenu.style.right = "-300px";
     document.body.style.backgroundColor = "rgba(0,0,0,0)";
    
}

