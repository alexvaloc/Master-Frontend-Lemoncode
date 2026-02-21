console.log("************** DELIVERABLE 02 *********************");
const concat = (a, b) => {
    return [...a, ...b];
};
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
console.log("Ejercicio Concat 1: " + concat(array1, array2));
//Opcional
const concatMultiple = (...args) => {
    //T[][] hace referencia a recibir muchos arrays
    return args.reduce((acc, array) => {
        return [...acc, ...array];
    }, []);
};
const array3 = [11, 12, 13, 14, 15];
const array4 = [16, 17, 18, 19, 20];
console.log(concatMultiple(array1, array2, array3, array4)); // [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
export {};
