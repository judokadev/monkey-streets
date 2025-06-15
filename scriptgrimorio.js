function carta1() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont2', 'cont3', 'cont4', 'cont5', 'cont6', 'cont7', 'cont8', 'cont9');
      selectctt.classList.toggle('cont1');
    }

    function carta2() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont1', 'cont3', 'cont4', 'cont5', 'cont6', 'cont7', 'cont8', 'cont9');
      selectctt.classList.toggle('cont2');
    }

    function carta3() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont1', 'cont2', 'cont4', 'cont5', 'cont6', 'cont7', 'cont8', 'cont9');
      selectctt.classList.toggle('cont3');
    }

    function carta4() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont1', 'cont2', 'cont3', 'cont5', 'cont6', 'cont7', 'cont8', 'cont9');
      selectctt.classList.toggle('cont4');
    }

    function carta5() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont1', 'cont2', 'cont3', 'cont4', 'cont6', 'cont7', 'cont8', 'cont9');
      selectctt.classList.toggle('cont5');
    }

    function carta6() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont1', 'cont2', 'cont3', 'cont4', 'cont5', 'cont7', 'cont8', 'cont9');
      selectctt.classList.toggle('cont6');
    }

    function carta7() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont1', 'cont2', 'cont3', 'cont4', 'cont5', 'cont6', 'cont8', 'cont9');
      selectctt.classList.toggle('cont7');
    }

    function carta8() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont1', 'cont2', 'cont3', 'cont4', 'cont5', 'cont6', 'cont7', 'cont9');
      selectctt.classList.toggle('cont8');
    }

    function carta9() {
      let selectctt = document.querySelector('.conteudomold');
      selectctt.classList.remove('cont1', 'cont2', 'cont3', 'cont4', 'cont5', 'cont6', 'cont7', 'cont8');
      selectctt.classList.toggle('cont9');
    }

    function atualizarDescricaoCarta(num) {
    const aba = document.querySelector('.aba');
    const descricoes = { 
        1: `<h3>Assassino</h3>
            <p>Ataque: 90</p>
            <p>Defesa: 40</p>
            <p>Força: 75</p>
            <p>Energia: 80</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Golpe rápido</li>
                <li>Furtividade</li>
                <li>Crítico mortal</li>
            </ul>`,
        2: `<h3>Guerreiro 31</h3>
            <p>Ataque: 80</p>
            <p>Defesa: 70</p>
            <p>Força: 85</p>
            <p>Energia: 60</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Golpe pesado</li>
                <li>Defesa firme</li>
                <li>Investida</li>
            </ul>`,
        3: `<h3>Guerreiro 12</h3>
            <p>Ataque: 75</p>
            <p>Defesa: 65</p>
            <p>Força: 80</p>
            <p>Energia: 70</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Espada giratória</li>
                <li>Bloqueio</li>
                <li>Contra-ataque</li>
            </ul>`,
        4: `<h3>Guerreiro 28</h3>
            <p>Ataque: 85</p>
            <p>Defesa: 60</p>
            <p>Força: 90</p>
            <p>Energia: 75</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Fúria do guerreiro</li>
                <li>Escudo protetor</li>
                <li>Golpe terrestre</li>
            </ul>`,
        5: `<h3>Soldado 3</h3>
            <p>Ataque: 70</p>
            <p>Defesa: 75</p>
            <p>Força: 70</p>
            <p>Energia: 65</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Tiro certeiro</li>
                <li>Granada</li>
                <li>Recarga rápida</li>
            </ul>`,
        6: `<h3>Guerreiro 19</h3>
            <p>Ataque: 88</p>
            <p>Defesa: 55</p>
            <p>Força: 82</p>
            <p>Energia: 78</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Golpe duplo</li>
                <li>Esquiva rápida</li>
                <li>Chute giratório</li>
            </ul>`,
        7: `<h3>Guerreiro 16</h3>
            <p>Ataque: 77</p>
            <p>Defesa: 68</p>
            <p>Força: 80</p>
            <p>Energia: 72</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Corte preciso</li>
                <li>Postura defensiva</li>
                <li>Golpe frontal</li>
            </ul>`,
        8: `<h3>Guerreiro 17</h3>
            <p>Ataque: 79</p>
            <p>Defesa: 66</p>
            <p>Força: 78</p>
            <p>Energia: 74</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Investida rápida</li>
                <li>Bloqueio de escudo</li>
                <li>Golpe final</li>
            </ul>`,
        9: `<h3>Guerreiro 18</h3>
            <p>Ataque: 83</p>
            <p>Defesa: 62</p>
            <p>Força: 81</p>
            <p>Energia: 76</p>
            <p>Tipos de ataque:</p>
            <ul>
                <li>Golpe de lança</li>
                <li>Defesa impenetrável</li>
                <li>Fúria selvagem</li>
            </ul>`
    };

    aba.innerHTML = descricoes[num] || '';
}

function toggleCarta(num) {
    const selectctt = document.querySelector('.conteudomold');
    const aba = document.querySelector('.aba');
    const className = 'cont' + num;

    if (selectctt.classList.contains(className)) {
        // Se a moldura da carta já está ativa, remove a classe e limpa a descrição
        selectctt.className = 'conteudomold'; // Remove todas as outras classes, resetando para a base
        aba.innerHTML = '';
    } else {
        // Remove todas as classes que começam com "cont" e adiciona a do botão clicado
        for (let i = 1; i <= 9; i++) {
            selectctt.classList.remove('cont' + i);
        }
        selectctt.classList.add(className);
        atualizarDescricaoCarta(num);
    }
}

// Criando as 9 funções carta1 a carta9 que chamam toggleCarta com o número correto
function carta1() { toggleCarta(1); }
function carta2() { toggleCarta(2); }
function carta3() { toggleCarta(3); }
function carta4() { toggleCarta(4); }
function carta5() { toggleCarta(5); }
function carta6() { toggleCarta(6); }
function carta7() { toggleCarta(7); }
function carta8() { toggleCarta(8); }
function carta9() { toggleCarta(9); }