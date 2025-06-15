function botao1(){
    let selectctt = document.querySelector('.Player');
    if (selectctt.classList.contains('personagem1')) {
        selectctt.classList.remove('personagem1'); 
    }

    
            
    else {
        selectctt.classList.add('personagem2')
    }
    if (selectctt.classList.contains('ctt2')) {
        selectctt.classList.remove('ctt2'); }
   
}