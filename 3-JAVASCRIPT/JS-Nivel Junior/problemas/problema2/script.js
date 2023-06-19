/*Crear un programa que permita entrar a una fiesta a los mayores de  18... al primero que entre a los dos de la mañana entrada gratis
let bandera =false;

const validarCliente=(time)=>{
    let edad=prompt("¿Cúal es tu edad? ");
    if(edad>18){
        if(time>=2 && time<7&& bandera==false){
            alert(`Podes pasar gratis, sos la primera persona despues de las 2 de la mañana`);
            bandera=true;
        } else{
            alert((`Podes pasar,toca pagar la entrada. Son las ${time}`))
        }
    }
    else{
        alert("A las casas papa, sos menor");
    }
}

validarCliente(21);
validarCliente(23);
validarCliente(0);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);