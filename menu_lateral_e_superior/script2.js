window.addEventListener("load", () => {
    let mec = document.getElementById('mecanica');
    mec.addEventListener('click', display_none);
    // mec.addEventListener('mouseout', display_none);
    
    function display_none(){
        console.log('click no botao');
        const content = document.getElementById('menu_suspenso_mec');
        content.classList.toggle("menu_suspenso_mec_on");
    }
});