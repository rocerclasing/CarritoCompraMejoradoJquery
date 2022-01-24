// Proceso entrada
const formulario = document.getElementById("formulario");
const userMessagge = document.getElementById("userMessagge");
const userEmail = document.getElementById("userEmail");
// Proceso
const EnviandoFormulario = ()=>{
    if(formulario != "undefined"){
        console.log("Se ha enviado exitosamente")
    }
    else{
        console.log("No se ha enviado")
    }
}


// Flujo de proceso 
formulario.addEventListener("submit", (e) => {
    const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    if (!regUserEmail.test(userEmail.value)) {
        return console.log("Formato email no válido");
    }
    // Proceso salida
    EnviandoFormulario();
    
});