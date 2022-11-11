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
    location.href =  "home.html"
}

var $c1 = document.getElementById("c1")
var $c2 = document.getElementById("c2")
var $c3 = document.getElementById("c3")
var $c4 = document.getElementById("c4")
var c1 = 0
var c2 = 0
var c3 = 0
var c4 = 0
var ligado = 0
var $btnligar =document.getElementById("ligar")

$btnligar.addEventListener("click",ligar)

function ligar (){
    ligado = 1
    desligado = 0
}

setInterval(contador,1000)

function contador(){
	if(ligado == 1){
		c4++
		if(c4 >= 10){
			c4 = 0
			c3++
		}
		if(c3 >= 6){
			c3 = 0
			c2++
		}
		if(c2 >= 10){
			c2 = 0
			c1++
		}
	}
    c4.innerHTML = c4
	$c3.innerHTML = c3
	$c2.innerHTML = c2
	$c1.innerHTML = c1
}