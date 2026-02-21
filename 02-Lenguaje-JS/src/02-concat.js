//concat

const concat = (a, b) => {
  return [...a, ...b];
};

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

console.log(concat(num1, num2));

//concat opcional

//Funcion reduce + funcion callback creada dentro de reduce:

const concatMultiple = (...args) => {
  console.log(args);
  return args.reduce((acc, array) => {
    return [...acc, ...array];
  }, []);
};

//Reutilizamos la funcion concat como callback
// const concatMultiple = (...args) => args.reduce(concat, []);

const num3 = [11, 12, 13, 14, 15];
const num4 = [16, 17, 18, 19, 20];

console.log(concatMultiple(num1, num2, num3, num4));
