//Starting var, objects and DOM

const nickInput=document.getElementById("nick");
const sizeInput=document.getElementById("size");
const formEntrada=document.getElementById("formEntrada");
const error=document.getElementById("error");
const email=document.getElementById("email")
//Function of event
function comprobarform(){
    //Comprobate changes
    if (nickInput.value.length==0)
    {
    console.log("Nick Unavailable");
    nickInput.focus();
    event.preventDefault();
    error.innerText="Write you're nick"
    return false;
    }else if(email.value==""){
        console.log("E-mail unavailable");
        email.focus();
        event.preventDefault();
        error.innerText="Write you're email";
        return false;
    }else if(sizeInput.value=="0"){
        console.log("Select a size plz");
        sizeInput.focus();
        event.preventDefault();
        error.innerText="Select a size for the game"
        return false;
    }
    return true;
}

//Charging the events
formEntrada.addEventListener('submit',comprobarform)

