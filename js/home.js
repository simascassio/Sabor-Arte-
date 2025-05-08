var maria = document.getElementById("maria");
var julia = document.getElementById("julia");
var lucas = document.getElementById("lucas");
var setadireita = document.getElementById("seta-dir");
var setaesquerda = document.getElementById("seta-esq");

function Rolarparadireita(){
    maria.style.display ="none";
    julia.style.display ="flex" 
    setadireita.style.display =":none"
    setaesquerda.style.display ="block"
}
function Rolarparaesquerda(){
    maria.style.display ="flex";
    julia.style.display ="none";
    setadireita.style.display ="block";
    setaesquerda.style.display ="none";
}
