//alert("Hola chiquita... Comenzamos!!!")
//Primer práctico de cofla
let montoCofla = parseFloat(prompt("¿Cuánto dinero tienes Cofla?"));
let montoRoberto = parseFloat(prompt("¿Cuánto dinero tienes Roberto?"));
let montoPedro =parseFloat(prompt("¿Cuánto dinero tienes Pedro?"));

if(montoCofla>=0.6 && montoCofla<1){
    alert("Cofla comprate el helado de agua");
    alert("Tu vuelto es: "+ (montoCofla-0.6));
} else if(montoCofla>=1 && montoCofla<1.6){
    alert("Cofla comprate el helado de crema");
    alert("Tu vuelto es: "+ montoCofla-1);
} else if(montoCofla>=1.6 && montoCofla<1.7){
    alert("Cofla comprate el helado heladix");
    alert("Tu vuelto es: "+ montoCofla-1.6);
} else if(montoCofla>=1.7 && montoCofla<1.8){
    alert("Cofla comprate el helado de heladovich");
    alert("Tu vuelto es: "+ montoCofla-1.7);
} else if(montoCofla>=1.8 && montoCofla<2.9){
    alert("Cofla comprate el helado de heraldo");
    alert("Tu vuelto es: "+ montoCofla-1.8);
} else if(montoCofla>=2.9){
    alert("Cofla comprate el helado con confites o 1/4 de helado");
    alert("Tu vuelto es: "+ (montoCofla-2.9));
}else{
    alert("Perdon no te alcanza para helados");
}

if(montoRoberto>=0.6 && montoRoberto<1){
    alert("Roberto comprate el helado de agua");
} else if(montoRoberto>=1 && montoRoberto<1.6){
    alert("Roberto comprate el helado de crema");
} else if(montoRoberto>=1.6 && montoRoberto<1.7){
    alert("Roberto comprate el helado de heladix");
} else if(montoRoberto>=1.7 && montoRoberto<1.8){
    alert("Roberto comprate el helado de heladovich");
} else if(montoRoberto>=1.8 && montRoberto<2.9){
    alert("Roberto comprate el helado de heraldo");
} else if(montoRoberto>=2.9){
    alert("Roberto comprate el helado con confites o 1/4 de helado");
}else{
    alert("Perdon no te alcanza para helados");
}

if(montoPedro>=0.6 && montoPedro<1){
    alert("Roberto comprate el helado de agua");
} else if(montPedroo>=1 && montoPedro<1.6){
    alert("Pedro comprate el helado de crema");
} else if(montoPedro>=1.6 && montoPedro<1.7){
    alert("Pedro comprate el helado de heladix");
} else if(montoPedro>=1.7 && montoPedro<1.8){
    alert("Roberto comprate el helado de heladovich");
} else if(montoPedro>=1.8 && montPedro<2.9){
    alert("Pedro comprate el helado de heraldo");
} else if(montoPedro>=2.9){
    alert("Pedro comprate el helado con confites o 1/4 de helado");
} 
else{
    alert("Perdon no te alcanza para helados");
}


