function aleatorioEnRango(min, max){
    // Devuelve un número aleatorio entre los números dados
    return Math.floor(Math.random()* (max - min + 1) + min );
  }
  console.log(aleatorioEnRango(501, 600));

function numeroInvertido(num){
    // Devuelve el número dado, pero invertido. 
    // Precondición: el numero ingresado no debe contener ceros a la izquierda
    let str =  num;
    str = str.toString()
    // let inverted = "";
    // for (let index = str.length - 1; index >= 0; index --){
    //   inverted = inverted + (str[index]);
    // }
    // return ( inverted );
    str = str.split("");
    str = str.reverse();
    str = str.join("");
    return parseInt(str)

  }

function esCapicua(num){
    // Indica si el número dado es capicúa.
    // El número ingresado no debe iniciar con 0, a menos que sea ingresado como string
    return num == numeroInvertido(num)
}
  console.log(esCapicua(1523251));
function numeroInvertido(num){
    // Devuelve el número dado, pero invertido. 
    // Precondición: el numero ingresado no debe contener ceros a la izquierda
    let str =  num;
    str = str.toString()
    // let inverted = "";
    // for (let index = str.length - 1; index >= 0; index --){
    //   inverted = inverted + (str[index]);
    // }
    // return ( inverted );
    str = str.split("");
    str = str.reverse();
    str = str.join("");
    return parseInt(str)

}

function esCapicua(num){
    // Indica si el número dado es capicúa.
    // El número ingresado no debe iniciar con 0, a menos que sea ingresado como string
    return num == numeroInvertido(num)
}
console.log(esCapicua(1523251));

function factorial(num){
    let final = num;
    for ( let factor = num -1; factor > 0; factor --){
      final *= factor
    }
    return final
}
console.log(factorial(5));
function divisores(numero) {

    let div = []
    for (let divisor = 1; divisor <= numero; divisor++){
    if (numero % divisor === 0){
      div.push(divisor);
    }
   }
   return div
}

function esPrimo(num){
    return divisores(num).length === 2
}
console.log(esPrimo(59))

function parOImpar(num){
    // Describe si el número dado es par o impar
    if (num % 2 === 0){
      return "Es par";
    }else{
      return "es impar";
    }
}
console.log(parOImpar(15))

function mayorMenor(arr){
    // devuelve el menor y el mayor numero del array dado.
    let menor = 0;
    let mayor = 0;
    for ( let indice = 0; indice < arr.length; indice++){
      if ( arr[indice] < menor){
        menor = arr[indice];
      }else if (arr[indice] > mayor){
        mayor = arr[indice];
      }
    }
    return [mayor, menor]
}
function esPar(num){
    // indica si el número dado es par.

    return num % 2 === 0
}

function numeros(arr){
    // devuelve un ojeto con los número del arreglo con las propiedades pares e impares

    let pares = [];
    let impares = [];
    for ( let indice = 0; indice < arr.length; indice ++){
      if( esPar(arr[indice])){
        pares.push(arr[indice]);
      } else {
        impares.push(arr[indice]);
      }
    }
    return { pares : pares, impares : impares}
}

function numerosOrdenados(arr){
    //devuelve un objeto con las propiedades asc y desc donde los número del array dado son ordenados de forma ascendente y descendiente respectivamente
    let asc = arr;
    asc =  asc.sort();
    let desc = [];
    for ( let index = asc.length -1; index >= 0; index --){
      desc.push(asc[index])
    }

    return { asc : asc, desc : desc}
}

function promedio(arr){
    // devuelve el promedio de todos los elementos del arrego. 
    // Es precondición para invocar esta función que el arreglo dado este compuesto por elementos de tipo número

    return suma(arr) / arr.length;
  }

  function suma(arr){
    // devuelve la suma de los elemento contenidos en el arreglo siendo este un arreglo exclusivamente de elemento de tipo número

    let sum = 0;
    for (let indice = 0; indice < arr.length; indice ++){
      sum = sum + arr[indice];

    }
    return sum;
  }
  console.log(promedio([9,8,7,6,5,4,3,2,1,0]))

