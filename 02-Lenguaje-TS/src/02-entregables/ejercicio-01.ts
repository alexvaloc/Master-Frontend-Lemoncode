console.log("************** DELIVERABLE 01 *********************");

//head

const head = <T>([first]: T[]): T | undefined => first; //destructuring para sacar el primer elemento

const miArray: string[] = ["Alex", "Isabel", "Santiago", "Paula"];

const result: string = head(miArray);

console.log("Ejercicio 1: " + result); //Alex

//Tail

const tail = <T>([_first, ...others]: T[]): T[] => others;

console.log("Ejercicio 2: " + tail(miArray)); //['Isabel', 'Santiago', 'Paula']

//Init

const init = <T>(miArray: T[]): T[] => {
  return miArray.slice(0, -1);
};

console.log("Ejercicio 3: " + init(miArray)); // Alex,Isabel,Santiago

//Last

const last = <T>(miArray: T[]): T | undefined => {
  return miArray.at(-1);
};
console.log("Ejercicio 4: " + last(miArray)); //Paula
