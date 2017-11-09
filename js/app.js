window.onload=function(){
    var board=document.querySelector('.board-js');

board.addEventListener('click',addX);

};
var centinel=false;

function addX(event){
    if(centinel)
        event.target.textContent='X';
    else
        event.target.textContent='O';
        centinel=!centinel;
}

board.addEventListener('click',reset);
function reset(){
    var td = document.getElementsByTagName('td');

    for(var i = 0; i < td.length; i++){
        td[i].innerHTML = ''
    }
}