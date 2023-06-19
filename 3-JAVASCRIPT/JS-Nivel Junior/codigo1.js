//2 leccion array
frutas =["banana", "manzana", "pera"];
//Para dividir la pantalla es windonw flecha
document.write(frutas+"<br>");
//Array asociatvos: es un array cuyos índices no son numéricos sinó claves(cadenas de texto.)
//En Javascript no existen realmente arrays asociativos pero podemos simularlos creando objetos y accediendo 
// a sus propiedades
let pc ={
    nombre: "DaltoPc",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio:"1TB"
};
let pc2=["DaltoPC","Intel Core I7","16GB","1TB"];
//document.write(pc2);
//document.write(pc2[0]);
document.write(pc.nombre);
document.write(pc['procesador']);
let nombre=pc['nombre'];
let procesador=pc['procesador'];
let ram=pc['ram'];
let espacio=pc['espacio'];
// Para ingresar los backticks es alt+96
let frase=`El nombre de mi PC es: <b>${nombre}.</b><br>El procesador es: <b>${procesador}.</b><br>La memoria es: <b>${ram}.</b><br>El espacio en disco es: <b>${espacio}.</b><br>`;

document.write(frase+"<br>");
let animales=["perro", "gato", "canario", "oveja"];

for(let animal in animales){
    document.write(animal +"<br>");
}//Devuelve posiciones
for(let animal of animales){
    document.write(animal +"<br>");
}//Devuelve elementos en esa posicion

let array1 =["Maria","Josefa","Roberto"];
let array2 =["Pedro","Marcelo",array1,"Josefina"];

forRancio:
for (let array in array2) {
    if (array ==2) {
        for(let array of array1){
            document.write(array+ "<br>");
            //cotinue;
            //break; //Lo ejecuta una vez y termina este for en el que estoy
            //break forRancio;//Lo ejecuta una sola vez
        }
    }else{
        document.write(array2[array]+ "<br>");
    }
}