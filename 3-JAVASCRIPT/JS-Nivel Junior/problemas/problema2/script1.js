/*Mini sistema de registro de asistecia*/
let cantidad=prompt("Ingrese la cantidad de alumnos");
let alumnosTotal=[];

for(i=0; i<cantidad;i++){
    
    alumnosTotal[i]=[prompt("Nombre del alumno "),0];

}
const totalAistencia=(nombre, p)=>{
    let presencia=prompt("Ingrese asistencia "+nombre);
    if(presencia=='p'|| presencia=='P'){
        alumnosTotal[p][1]++;
    }
    //document.write(alumnosTotal[p][1])
}
for(i=0;i<30;i++){
    for(alumno in alumnosTotal){
        totalAistencia(alumnosTotal[alumno][0],alumno);
        //document.write(alumnosTotal[alumno][0],);
    }
    
}

for(alumno in alumnosTotal){
    let resultado= `${alumnosTotal[alumno][0]}:<br>______Presente: <b>${parseInt(alumnosTotal[alumno][1])}</b><br>
                                                   ______Ausentes: <b>${30-(parseInt(alumnosTotal[alumno][1]))}`;
    if(30-(parseInt(alumnosTotal[alumno][1]))>18){
        resultado+="<b style='color:red'> REPROBADO POR INASISTENCIA</b><br><br>"
    }else{
        resultado+="<br><br>";
    }
    document.write(resultado)
}