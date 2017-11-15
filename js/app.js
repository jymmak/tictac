//DECLARANDO VARIABLES
var board = document.querySelector('.board-js');
board.addEventListener('click', addMove);

var button = document.querySelector('.button-js');
button.addEventListener('click', reset);

var result = document.querySelector('.result-js');


// FUNCIONES

var centinel = true;
var array = [];
function addMove(event) {
    var position = event.target.id[1] - 1;
    if (centinel) {
        event.target.textContent = 'X';
        array[position] = 'X';
        event.target.className = 'play-x';
        checkPlayer('X');
        centinel = false;
    } else {
        event.target.textContent = 'O';
        array[position] = 'O';
        event.target.className = 'play-o';
        checkPlayer('O');
        centinel = true;
    }
};

function checkPlayer(value) {
    if ((array[0] == value && array[1] == value && array[2] == value) ||
        (array[0] == value && array[3] == value && array[6] == value) ||
        (array[0] == value && array[4] == value && array[8] == value) ||
        (array[3] == value && array[4] == value && array[5] == value) ||
        (array[1] == value && array[4] == value && array[7] == value) ||
        (array[2] == value && array[4] == value && array[6] == value) ||
        (array[6] == value && array[7] == value && array[8] == value) ||
        (array[2] == value && array[5] == value && array[8] == value)) {

            board.removeEventListener('click', addMove);

        result.textContent = 'You win!!!!' + '        '+ value + ' => ' + 'great';

    } else if (array[0] != null && array[1] != null && array[2] != null &&
        array[3] != null && array[4] != null && array[5] != null &&
        array[6] != null && array[7] != null && array[8] != null) {

        board.removeEventListener('click', addMove);

        result.textContent = 'Tie!!!!';
    };
};

//FUNCION RESET
function reset() {
    window.location.reload();
};