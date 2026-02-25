//operadores logicos

// &&:  si los dos son verdaderos, el resultado es verdadero
// ||: si uno de los dos es verdadero, el resultado es verdadero
// ! : niega el valor, si es verdadero, lo convierte en falso, y viceversa

var compara = 10 > 8 && 10 == 10
console.log(compara);
var compara = true && true;
console.log("Comparacion &&: "+compara);

var compara = 10 > 8 || 10 == 9
console.log(compara);
var compara = true || false;
console.log("Comparacion ||: "+compara);    

var compara = !(10 > 8)
console.log(compara);
var compara = !true;
console.log("Comparacion !: "+compara);