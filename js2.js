var $timeA = document.getElementById("timeA")
var $timeB = document.getElementById("timeB")

$timeA.innerHTML = localStorage.getItem("inpCasa")
$timeB.innerHTML = localStorage.getItem("inpRival") 


 function voltarMenu(){
    localStorage.setItem("inpCasa",$inpCasa.value)
    localStorage.setItem("inpRival",$inpRival.value)
    location.href = "menu.html"

 }
 var $voltar= document.getElementById("voltar")


$voltar.addEventListener("click",voltarMenu)

function voltarMenu(){
    location.href =  "index.html"
}
var $c1 = document.getElementById("c1")
var $c2 = document.getElementById("c2")
var $c4 = document.getElementById("c4")
var $c5 = document.getElementById("c5")
var c1 = 0
var c2 = 0
var c4 = 0
var c5 = 0
var ligado = 0
var $btnLigar = document.getElementById("btnLigar")
var $btnDesligar = document.getElementById("btnDesligar")

$btnLigar.addEventListener("click",ligar)
$btnDesligar.addEventListener("click",desligar)

function ligar(){
	ligado = 1
}
function desligar(){
	ligado = 0
}
setInterval(contador,1000)

function contador(){
	if(ligado == 1){
		c5++
		if(c5 >= 10){
			c5 = 0
			c4++
		}
		if(c4 >= 6){
			c4 = 0
			c2++
		}
		if(c2 >= 10){
			c2 = 0
			c1++
		}
	}
	
	$c5.innerHTML = c5
	$c4.innerHTML = c4
	$c2.innerHTML = c2
	$c1.innerHTML = c1
}

