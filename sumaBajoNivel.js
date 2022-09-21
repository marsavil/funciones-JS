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

    if (valor1.length < valor2.length){
        for( let c = valor2.length - valor1.length; c > 0; c --){
            valor1.unshift("0");
            //console.log(valor1);
        }
    }else if (valor1.length > valor2.length){
        for( let d = valor1.length - valor2.length; d > 0; d --){
            valor2.unshift("0"); 
            //console.log(valor2);  
        }
    }
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
