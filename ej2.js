//AQUI NO SOLO VALIDO QUE NO SEA MENOR A 0 SINO QUE TAMPOCO SEA UN 2

let cantidadLados = 7
//utilize el siete para no usar un prompt y tener que usar un html pueden probar con cualquier numero o caracter.

function tipoFigura(lados){
    if(lados == 0){
        forma = "Circulo";
    }
    if(lados == 3){
        forma = "Triangulo";
    }
    else if(lados == 4){
        forma = "Cuadrado";
    }
    else if(lados == 5){
        forma = "Pentagono";
    }
    else if(lados == 6){
        forma = "Hexagono"
    }
    else if(lados >=7){
        forma = "Poligono";
    }
    else if(lados < 0 || lados == 2 || lados == 1){
        forma = "Ingreso no válido";
    }
    return forma;

}

forma = tipoFigura(cantidadLados);
if (forma === "Ingreso no válido")
    console.log(forma)
else{
    console.log(`Para ${cantidadLados} lados, la forma es un ${forma}`)
}