//Funciones
function saludar(){
    alert("Hola!!!!");
    return "La función se ejecuto correctamente <br>";
}

let saludo =saludar();
document.write(saludo);

function suma(num1, num2){
    return num1+ num2;
}
console.log(suma(56,24));
document.write("La segunda llamada de esta funcion"+suma(30,20)+"<br>");
let num1=parseInt(prompt("Ingrese el primer valor"));
let num2=parseInt(prompt("Ingrese el segundo valor"));
document.write("La suma de los números es:"+ suma(num1,num2)+"<br>");

//Segunda funcion para saludar
function saludar1(nombre) {
    let frase =`¡Hola ${nombre}! ¿Cómo estas?<br>`;
    document.write(frase);
}

saludar1("Gisela");

const saludar2 = function(nombre){
    let frase =`¡Hola ${nombre}! ¿Cómo estas?<br>`;
    document.write(frase);
}

saludar2("Pedro");
//Funciones flecha, en donde se quita la  palabra rservada function y se la cambia por un flecha despues de los parametros
const saludar3=(nombre)=>{
    let frase =`¡Hola ${nombre}! ¿Cómo estas?<br>`;
    document.write(frase);
}
saludar3("Carlos");

//Lo más importate de las funciones flechas es que se hacen con menos líneas de código, no hce falta la palabra reservada function, solo el nombre del parametro si no usas parametros solo parentesis, tampoco las llaves si es un sola línea de codigo, ni la palabra return.
const saludar4=nombre=>document.write(`¡Hola ${nombre}! ¿Cómo estas?<br>`);