var $inpCasa = document.getElementById("inpCasa")
var $inpRival = document.getElementById("inpRival")
var $btnEntrar = document.getElementById("btnEntrar")

$btnEntrar.addEventListener("click",abrirMenu)

function abrirMenu(){
    //salvar dados
    localStorage.setItem("inpCasa",$inpCasa.value)
    localStorage.setItem("inpRival",$inpRival.value)
    location.href = "menu.html"
}

