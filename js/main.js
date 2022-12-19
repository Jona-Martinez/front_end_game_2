//Starting var, objects and DOM

const nickInput=document.getElementById("nick");
const sizeInput=document.getElementById("size");
const formEntrada=document.getElementById("formEntrada");

//Function of event
function comprobarform(){
    //Comprobate changes
    if (nickInput.value.length==0)
    {
    console.log("Nick Unavailable");
    nickInput.focus();
    event.preventDefault();
    return false;
    }else if(sizeInput.value=="0"){
        console.log("Select a size plz");
        sizeInput.focus();
        Event.preventDefault();
        return false;
    }
    return true;
}

//Charging the events
formEntrada.addEventListener('submit',comprobarform)

