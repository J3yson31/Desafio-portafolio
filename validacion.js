//Haz tú validación en javascript acá

function validar(id){
    var elemento=document.getElementById(id);
    if(elemento.checkValidity()){
        elemento.style.borderColor="blue";
    }else{
        elemento.style.borderColor="red";
    }
}


function enviarValidar(){ 
var nombre = document.getElementById('nombre').checkValidity();
var  email = document.getElementById('email').checkValidity();
var asunto = document.getElementById('asunto').checkValidity();
var mensaje = document.getElementById('mensaje').checkValidity();


if(nombre&&email&&asunto&&mensaje){
    alert("Formulario exitoso");
}
else{
    alert("Formulario exitoso");
}


 }

