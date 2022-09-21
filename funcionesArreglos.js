function concatenarElementoSegun(arr, elemento, condicion) {
    // concatena el elemento dado al inicio o al final del arreglo segun se cumpla o no la condicion
    if (condicion){
        arr.push(elemento);
    }else{
        arr.unshift(elemento);
    }
}

function eliminarDuplicados(array){
    // devuelve un arreglo con los elementos del arreglo dado, pero elimina deja fuera los elementos duplicados

    let nuevoArray = [array[0]];
    for ( let indice = 1; indice < array.length; indice ++){
      if (!contieneElElemento(nuevoArray, array[indice])){
        nuevoArray.push(array[indice]);
      }
    }
    return nuevoArray;
}

function contieneElElemento(arr, elemento){
    // indica si el elemento dado se encuentra dentro del array dado.
    let verdad = false;
    for ( let indice = 0; indice < arr.length && verdad === false; indice ++){
      if ( arr[indice] === elemento){
        verdad = arr[indice] === elemento;
      }
    }
    return verdad;
}
