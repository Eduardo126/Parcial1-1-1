function agregarnuevoelemento(){
    var nuevoelemento= document.createElement("p");
nuevoelemento.textContent = "Agrego mi pokemon favorito :)"

var div1 = document.getElementById("p");
div1.parentNode.insertBefore(nuevoelemento, div1);
}
