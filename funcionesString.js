function repetir__Veces(str, veces){
    // devuelve la cadena dada repetida tantas veces como indica el parametro veces
    let string = "";
    for ( veces; veces !== 0; veces --){
      string = string + str;
      if (veces > 1){
        string = string + " "
      }
    }
    return string;
  }

function cadenaInvertida(str){
    // devuelve la cadena dada invertida
    let inverted = "";
    for (let index = str.length - 1; index >= 0; index --){
      inverted += str[index];
    }
    return ( inverted );
  }
function repeticionesEnLaCadena(cadena, palabra){
    // Devuelve la cantidad de veces que la palabra dada aparece en la cadena
    let apariciones = 0;
    let arr = cadena.split(" ")
    for (let index = 0; index < arr.length; index ++){
      if ( arr[index] === palabra){
        apariciones += 1
      }
    }
    return apariciones;
  }
function cadenaContieneElemento(str,elemento){
    // Indca si la cadena dada contiene el elemento dado
    let verdad = false
    for (let index = 0; index < str.length && verdad === false; index ++){
      if ( str[index] === elemento){
        verdad = str[index] === elemento;
      }
    }
    return verdad
}

function soloLetras(str){
    // devuelve un arreglo con solo las letras de la cadena dada limpiandola de cualquier otro tipo de caracter
    let may = str.toUpperCase();
    let min = str.toLowerCase();
    let letras = []
    for ( let indice = 0; indice < may.length; indice ++ ){
      if (may[indice] !== min[indice]){
        letras.push(str[indice])
      }
    }
    return letras
}
function esVocal(letra){
    // indica si la letra dada es vocal
    if ( letra === "a" || letra === "A"){
      return letra === "a" || letra === "A";
    }else if ( letra === "e" || letra === "E"){
      return letra === "e" || letra === "E";
    }else if ( letra === "i" || letra === "I"){
      return letra === "i" || letra === "I";
    }else if ( letra === "o" || letra === "O"){
      return letra === "o" || letra === "O";
    }else if ( letra === "u" || letra === "U"){
      return letra === "u" || letra === "U";
    }
}

function cantidadDeVocalesYConsonates(str){
    // Devuelve la cantidad de vocales y consonantes que conforman la cadena dada.
    let letrasArr = soloLetras(str);
    let vocales = 0;
    let consonantes = 0;
    for ( let indice = 0; indice < letrasArr.length; indice ++){
      if ( esVocal(letrasArr[indice])){
        vocales += 1;
      }else{
        consonantes += 1;
      }
    }
    return `${str} contiene ${vocales} vocales y ${consonantes} consonantes`
}