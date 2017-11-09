//DECLARACION DE OBJETOS Y VARIABLES
var turn = 1;
var whatturn;
var arrag = new Array(9);
var  cells=document.getElementsByClassName("michi");
var  label = document.getElementsByClassName("michi")



// DECLARANDO FUNCIONES 
function winner(){

}

function michi(){

}

function loadDocument(){
}
    while (n<cells.length){
       cells[n].addEventListener("click",michi);
    }


//ASIGNACION DE EVENTOS
window.addEventListener("load", loadDocument);

