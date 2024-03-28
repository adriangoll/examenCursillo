// 1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

// Teniendo una variable numérica que representa el número de lados de una figura geométrica,
// mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

// Círculo: si el número de lados es 0.
// Triángulo: si el número de lados es 3.
// Cuadrado: si el número de lados es 4.
// Pentágono: si el número de lados es 5.
// Hexágono: si el número de lados es 6.
// Polígono: si el número de lados es mayor que 6.
// Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.
 
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
    else if(lados < 0){
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


