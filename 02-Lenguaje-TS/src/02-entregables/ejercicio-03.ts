console.log("************** DELIVERABLE 03 *********************");

//Clone

function clone<T extends Object>(sourse: T): T {
  // Debemos restringir el genérico a objetos
  return { ...sourse };
}

interface Student {
  name: string;
  surname: string;
  age: number;
}

const student1: Student = {
  name: "Alex",
  surname: "Valenca",
  age: 32,
};

const student2: Student = clone(student1);

console.log(student1 === student2); //false, son diferentes objetos
console.log(student1.name === student2.name); //true

// Merge

const merge = <T extends Object, U extends Object>(
  source: T,
  target: U,
): T & U => {
  //La intersección (T & U) construye nuevos tipos automáticamente
  return { ...target, ...source };
};

const a = { name: "Isabel", surname: "Sanchez", country: "Germany" };
const b = { name: "Alejandra", age: 34, married: false };

console.log(merge(a, b)); //{name: 'Isabel', age: 34, married: false, surname: 'Sanchez', country: 'Germany'}
