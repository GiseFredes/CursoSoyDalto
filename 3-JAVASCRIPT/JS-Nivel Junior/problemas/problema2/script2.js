//Calculadora
//las cuatro opearaciones báscias
const sumar=(num1, num2)=>{
    return parseInt(num1)+parseInt(num2);
}
const restar=(num1, num2)=>{
    return parseInt(num1)-parseInt(num2);
}
const dividir=(num1, num2)=>{
    return parseInt(num1)/parseInt(num2);
}
const multiplicar=(num1, num2)=>{
    return parseInt(num1)*parseInt(num2);
}

alert("¿Qué operación desea realizar?");
let operacion=prompt("1-Sumar, 2-Restar, 3-Multiplicar, 4- Dividir");
let primer=prompt("Ingrese el primer número");
let segundo=prompt("Ingrese el segundo número");
switch (operacion) {
    case "1":
        document.write(sumar(primer,segundo));
        break;
    case "2":
        document.write(restar(primer,segundo));
        break;
    case "3":
        document.write(multiplicar(primer,segundo));
        break;
    case "1":
        document.write(dividir(primer,segundo));
        break;
    default:
        break;
}