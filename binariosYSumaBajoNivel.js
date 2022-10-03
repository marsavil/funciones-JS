function convertirABinario(num){
    let number = num;
    let binario = (num % 2).toString();
    for (; number > 1;){
      number = parseInt(number / 2);
      binario = (number % 2) + binario;
    }
    return binario;

}
function convertirABinario(num){ // con recursión
    if ( num === 0 ) return '0'
    let binario = (num % 2).toString()
    return convertirABinario((Math.floor(num/2))) + binario
}


function binarioADecimal(num){
    // convierte el numero binario dad a decimal. 
    //Precondicion: El número dado no debe tener ceros a la izquierda
    let numero = num;
    numero = numero.toString();
    let decimal = 0;
    for ( let index = numero.length - 1; index >=0 ; index --){
      //decimal += numero[index]*(2**(numero.length -1 - index));
      decimal += numero[index] * Math.pow(2, numero.length -1 - index)
    }
    return decimal
}
function binarioADecimal(num){ // con recursión
    if ( num.length === 0 ) return 0
    let numArr = num.split(''),
        decimal = numArr[0  ] * 2 ** (numArr.length - 1);
    numArr.shift();
    numArr = numArr.join('');
    return decimal + binarioADecimal(numArr)
}

function convertirNumero(num, base){
    // convierte numeros binarios (base 2) a decimales (base 10) y viceversa
    if (base === 2){
      //return parseInt(num, base);
      return binarioADecimal(num)
    } else if(base === 10) {
      return convertirABinario(num);
    } else {
      return " ingrese 2 o 10 para indicar el sistema de origen "
    }

}

// representación en javascript del la operación de suma a bajo nivel


function xor(dig1, dig2){
    // devuelve la operación lógica exclusive OR entre los valores dados
    if ((!parseInt(dig1) && parseInt(dig2)) || (parseInt(dig1) && !parseInt(dig2))) {
        return 1;
    } else {
        return 0;
    }
    
    
}
function and(dig1, dig2){
    // devuelve la operación lógica AND entre los valores dados
    if (parseInt(dig1) && parseInt(dig2)){
        return 1;
    }else{
        return 0;
    }

}

xor(1,1)

function halfAdder(bitA, bitB){
    // Devuelve un objeto suma de los números binarios dados con una salida y un acarreo 
    return {
        out : xor(bitA, bitB),
        carry : and(bitA,bitB)
    };
}
function resolveCarry(bit1, bit2, bit3){
    // Devuelve el carry en una operción de suma de dos digitos y un acarreo
    if ( and(and(parseInt(bit1), parseInt(bit2)), parseInt(bit3)) ){
        return and(and(parseInt(bit1), parseInt(bit2)), parseInt(bit3))   
    } else if ( and(parseInt(bit3), parseInt(bit2)) ) {
        return and(parseInt(bit3), parseInt(bit2))
    } else if ( and(parseInt(bit3), parseInt(bit1)) ){
        return and(parseInt(bit3), parseInt(bit1))
    } else if ( and(parseInt(bit1), parseInt(bit2)) ){
        return and(parseInt(bit1), parseInt(bit2))
    } else {
        return 0
    }
}
function fullAdder(bitA , bitB , carry){
    // Devuelve el objeto suma de dos digitos en un circuito full adder
    return {
        out : xor(xor(bitA, bitB), carry),
        carry : resolveCarry(bitA,bitB, carry)
    };
}
function emparejar(arr1, arr2, elemento){

    if (arr1.length < arr2.length){
        for( let c = arr2.length - arr1.length; c > 0; c --){
            arr1.unshift(elemento);
        }
    }else if (arr1.length > arr2.length){
        for( let d = arr1.length - arr2.length; d > 0; d --){
            arr2.unshift(elemento); 
        }
    }

}

function sumaBinario(binario1, binario2){
    // Devuelve la suma de de losnúmero binarios dados
    let valor1 = binario1;
    valor1 = valor1.toString();
    valor1 = valor1.split("");
    //console.log(valor1);

    let valor2 = binario2;
    valor2 = valor2.toString();
    valor2 = valor2.split("");
    //console.log(valor2);

    emparejar(valor1, valor2, "0")

    let acarreo = halfAdder(valor1[valor1.length - 1], valor2[valor2.length - 1]).carry;
    //console.log(acarreo);
    let resultado = [halfAdder(valor1[valor1.length - 1], valor2[valor2.length - 1]).out];
    //console.log(resultado);

    for( let bit = valor1.length - 2; bit >= 0;  bit --){
        resultado.unshift(fullAdder(parseInt(valor1[bit]), parseInt(valor2[bit]), acarreo).out);
        acarreo = fullAdder(parseInt(valor1[bit]), parseInt(valor2[bit]), acarreo).carry;
        //console.log(resultado);
        //console.log(acarreo);
    }
    if (acarreo !== 0){
        resultado.unshift(acarreo);
    }
    
    resultado = resultado.join("");
    //console.log(resultado)
    return parseInt(resultado);


}
