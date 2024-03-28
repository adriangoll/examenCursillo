let cantidadLados = 5
let largoLadoCentimetros = 6
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
    else if(lados < 0 || lados == 2){
        forma = "Ingreso no válido";
    }
    return forma;

}

forma = tipoFigura(cantidadLados);

function perimetroFigura(forma, lado){ 
    if ( forma === "Circulo"){
        perimetro = Math.round(2 * Math.PI * largoLadoCentimetros);
    }
    else if (forma === "Ingreso no válido"){
        perimetro = "No se puede con 2 o 1 o '-0')"
    }
    else{
        perimetro = largoLadoCentimetros * cantidadLados
    }
    return perimetro
}

perimetro = perimetroFigura(forma, cantidadLados)
if (perimetro === "No se puede con 2 o 1 o '-0')")
    console.log(perimetro)
else{
    console.log(`El perímetro es de ${perimetro}`)
}