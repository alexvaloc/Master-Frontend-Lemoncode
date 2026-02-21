//Head

const head = ([first]) => first;

const miArray = [1, 2, 3, 4, 5];

console.log(head(miArray)); //1

//Tail

const tail = ([_first, ...array]) => array;

const nombres = ["Alex", "Isabel", "Santiago", "Paula"];

console.log(tail(nombres)); //["Isabel", "Santiago", "Paula"]

//Init

const init = (array) => array.slice(0, -1);

const ciudades = ["Madrid", "Munich", "Milan", "Nuremberg"];

console.log(init(ciudades)); //["Madrid", "Munich", "Milan"];
console.log(ciudades);

//Last

const last = (array) => array.at(-1);

const saludos = ["Hi", "Hei", "Hello", "Hola", "Good morning"];

console.log(last(saludos)); //Good morning
console.log(saludos);
