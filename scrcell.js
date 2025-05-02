function botao1(){
    let selectctt = document.querySelector('.conteudo');
    if (selectctt.classList.contains('ctt1')) {
        selectctt.classList.remove('ctt1'); 
    }

    
            
    else {
        selectctt.classList.add('ctt1')
    }
    if (selectctt.classList.contains('ctt2')) {
        selectctt.classList.remove('ctt2'); 
    }
    if (selectctt.classList.contains('ctt3')) {
        selectctt.classList.remove('ctt3'); 
    }
    if (selectctt.classList.contains('ctt4')) {
        selectctt.classList.remove('ctt4'); 
    }
}

function botao2(){
    let selectctt = document.querySelector('.conteudo');
    if (selectctt.classList.contains('ctt2')) {
        selectctt.classList.remove('ctt2');
    }
    
    else {
        selectctt.classList.add('ctt2')
    }
    if (selectctt.classList.contains('ctt1')) {
        selectctt.classList.remove('ctt1'); 
    }
    if (selectctt.classList.contains('ctt3')) {
        selectctt.classList.remove('ctt3'); 
    }
    if (selectctt.classList.contains('ctt4')) {
        selectctt.classList.remove('ctt4'); 
    }
}
function botao3(){
    let selectctt = document.querySelector('.conteudo');
    if (selectctt.classList.contains('ctt3')) {
        selectctt.classList.remove('ctt3');
    }
    
    else {
        selectctt.classList.add('ctt3')
    }
    if (selectctt.classList.contains('ctt1')) {
        selectctt.classList.remove('ctt2'); 
    }
    if (selectctt.classList.contains('ctt2')) {
        selectctt.classList.remove('ctt2'); 
    }
    if (selectctt.classList.contains('ctt4')) {
        selectctt.classList.remove('ctt4'); 
    }
}
function botao4(){
    let selectctt = document.querySelector('.conteudo');
    if (selectctt.classList.contains('ctt4')) {
        selectctt.classList.remove('ctt4');
    }
    
    else {
        selectctt.classList.add('ctt4')
    }
    if (selectctt.classList.contains('ctt1')) {
        selectctt.classList.remove('ctt1'); 
    }
    if (selectctt.classList.contains('ctt2')) {
        selectctt.classList.remove('ctt2'); 
    }
    if (selectctt.classList.contains('ctt3')) {
        selectctt.classList.remove('ctt3'); 
    }
}

function botao1lt(){
    let selectctt = document.querySelector('.conteudolt');
    if (selectctt.classList.contains('ctt1lt')) {
        selectctt.classList.remove('ctt1lt'); 
    }

    
            
    else {
        selectctt.classList.add('ctt1lt')
    }
    if (selectctt.classList.contains('ctt2lt')) {
        selectctt.classList.remove('ctt2lt'); 
    }
    if (selectctt.classList.contains('ctt3lt')) {
        selectctt.classList.remove('ctt3lt'); 
    }
    if (selectctt.classList.contains('ctt4lt')) {
        selectctt.classList.remove('ctt4lt'); 
    }
}

function botao2lt(){
    let selectctt = document.querySelector('.conteudolt');
    if (selectctt.classList.contains('ctt2lt')) {
        selectctt.classList.remove('ctt2lt');
    }
    
    else {
        selectctt.classList.add('ctt2lt')
    }
    if (selectctt.classList.contains('ctt1lt')) {
        selectctt.classList.remove('ctt1lt'); 
    }
    if (selectctt.classList.contains('ctt3lt')) {
        selectctt.classList.remove('ctt3lt'); 
    }
    if (selectctt.classList.contains('ctt4lt')) {
        selectctt.classList.remove('ctt4lt'); 
    }
}
function botao3lt(){
    let selectctt = document.querySelector('.conteudolt');
    if (selectctt.classList.contains('ctt3lt')) {
        selectctt.classList.remove('ctt3lt');
    }
    
    else {
        selectctt.classList.add('ctt3lt')
    }
    if (selectctt.classList.contains('ctt1lt')) {
        selectctt.classList.remove('ctt2lt'); 
    }
    if (selectctt.classList.contains('ctt2lt')) {
        selectctt.classList.remove('ctt2lt'); 
    }
    if (selectctt.classList.contains('ctt4lt')) {
        selectctt.classList.remove('ctt4lt'); 
    }
}
function botao4lt(){
    let selectctt = document.querySelector('.conteudolt');
    if (selectctt.classList.contains('ctt4lt')) {
        selectctt.classList.remove('ctt4lt');
    }
    
    else {
        selectctt.classList.add('ctt4lt')
    }
    if (selectctt.classList.contains('ctt1lt')) {
        selectctt.classList.remove('ctt1lt'); 
    }
    if (selectctt.classList.contains('ctt2lt')) {
        selectctt.classList.remove('ctt2lt'); 
    }
    if (selectctt.classList.contains('ctt3lt')) {
        selectctt.classList.remove('ctt3lt'); 
    }
}

// lateral //

function rolar1(){
    let rolar = document.querySelector('.slider');
    if (rolar.classList.contains('posicao1')){
        rolar.classList.remove('posicao1');
    }
    

    else {
        rolar.classList.add('posicao1')
    }
    
    if (rolar.classList.contains('posicao2')){
        rolar.classList.remove('posicao2');
    }
    if (rolar.classList.contains('posicao3')){
        rolar.classList.remove('posicao3');
    }
}

function rolar2(){
    let rolar = document.querySelector('.slider');
    if (rolar.classList.contains('posicao2')){
        rolar.classList.remove('posicao2');
    }
    

    else {
        rolar.classList.add('posicao2')
    }
    
    if (rolar.classList.contains('posicao1')){
        rolar.classList.remove('posicao1');
    }
    if (rolar.classList.contains('posicao3')){
        rolar.classList.remove('posicao3');
    }

    
}

function rolar3(){
    let rolar = document.querySelector('.slider');
    if (rolar.classList.contains('posicao3')){
        rolar.classList.remove('posicao3');
    }
    

    else {
        rolar.classList.add('posicao3')
    }
    
    if (rolar.classList.contains('posicao2')){
        rolar.classList.remove('posicao2');
    }
    if (rolar.classList.contains('posicao1')){
        rolar.classList.remove('posicao1');
    }
}