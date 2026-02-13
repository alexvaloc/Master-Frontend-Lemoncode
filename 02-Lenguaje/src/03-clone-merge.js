//Clone
function clone(source) {
  return { ...source };
}

const student = {
  name: "Alex",
  surname: "Valenca",
  age: 32,
};

const copy = clone(student);

console.log(copy); //{name: 'Alex', lastName: 'Valenca', age: 32}
console.log(copy === student); //false

//Merge

function merge(source, target) {
  //   const c = { ...target, ...source };
  //   return c;
  //otra posibilidad
  return { ...clone(target), ...clone(source) };
}

const a = { name: "Isabel", surname: "Sanchez", country: "Germany" };
const b = { name: "Alejandra", age: 34, married: false };

console.log(merge(a, b));
