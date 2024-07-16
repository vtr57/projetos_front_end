document.getElementById("mecanica").addEventListener("click", displayMenu);
const displayMenu = function() {
    const menu_suspesno = document.getElementById("menu_suspenso");
    menu_suspesno.style.display = 'none';
    document.getElementById("myDIV").style.display = "none";
}