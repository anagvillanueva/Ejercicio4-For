let frutas = ["Mango", "Manzana", "Pera", "Papaya"]

// console.log(frutas[0]);

// Ciclo FOR 

for(let i = 0;i <frutas.length;i++){
    console.log(frutas[i])
}

// Quiero imprimir los numeros del 1 al 50 que son impares 

console.log("Numeros impares del 1 al 50")

for(let i = 1; i<= 50; i++){
    if(i% 2 !== 0 ){
        console.log(i);
    }
}