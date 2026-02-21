console.log("************** DELIVERABLE 01 *********************");
//head
const head = ([first]) => first; //destructuring para sacar el primer elemento
const miArray = ["Alex", "Isabel", "Santiago", "Paula"];
const result = head(miArray);
console.log("Ejercicio 1: " + result); //Alex
//Tail
const tail = ([_first, ...others]) => others;
console.log("Ejercicio 2: " + tail(miArray)); //['Isabel', 'Santiago', 'Paula']
//Init
const init = (miArray) => {
    return miArray.slice(0, -1);
};
console.log("Ejercicio 3: " + init(miArray)); // Alex,Isabel,Santiago
//Last
const last = (miArray) => {
    return miArray.at(-1);
};
console.log("Ejercicio 4: " + last(miArray)); //Paula
export {};
