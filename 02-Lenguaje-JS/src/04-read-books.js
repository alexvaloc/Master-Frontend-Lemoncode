//Read books

function isBookRead(books, titleToSearch) {
  const found = books.find((element) => element.title === titleToSearch);
  return found?.isRead ?? false;
}

const books = [
  {
    title: "El señor de los anillos",
    isRead: false,
  },
  {
    title: "La asistenta",
    isRead: false,
  },
  {
    title: "El cuento de la criada",
    isRead: true,
  },
  {
    title: "La cúpula",
    isRead: true,
  },
];

console.log(books);

console.log(isBookRead(books, "El señor de los anillos")); //false
console.log(isBookRead(books, "La asistenta")); //false
console.log(isBookRead(books, "El cuento de la criada")); //true
console.log(isBookRead(books, "La cúpula")); //true
console.log(isBookRead(books, "Los juegos del hambre")); //false - no existe
