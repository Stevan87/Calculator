var h = document.getElementById("hone");
var one;
var two;
function moveOne(){
	h.style.marginLeft = "100px";
	h.style.transition = "0.7s";
}
function moveTwo(){
	h.style.marginLeft = "0px";
}

one = setInterval(moveOne,2000);
two = setInterval(moveTwo,4000);