//UN programa que ingrese la edad. Solo pasa si es mayor de edad
let bandera =0;
let edad=0;
let hora=0;

edad=parseInt(prompt("Ingrese la edad: "));
hora=parseInt(prompt("Ingrese la hora: "));
while(bandera==0){
    if(edad>=18){
        if(hora==2&&bandera==0){
            bandera=1
            document.write('Pase libre');
        }else{
            document.write('Paso permitido... Pague entrada')
        }
    }else{
        document.write('A dormir BB');
    }
}
