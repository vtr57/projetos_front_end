window.addEventListener("load", () => {
    console.log("page is fully loaded");
    
    let btn = document.getElementById('btn');
    btn.addEventListener('mouseover', mouseover);
    btn.addEventListener('mouseout', mouseout);
    btn.addEventListener('click', display_none);
    
    function mouseover(){
        console.log('entrou no botao')
    }
    function mouseout(){
        console.log('saiu no botao')
    }
    
    function display_none(){
        console.log('click no botao')
        const content = document.getElementById('content');
        content.classList.toggle("content_on");
        btn.style.backgroundColor = 'green';
    }
});