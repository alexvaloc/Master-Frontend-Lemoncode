import styles from "./styles.module.css";

console.log("Hola mundo desde index.ts");

const num1: number = 1;
const num2: number = 1;

console.log(num1 + num2);

const element = document.getElementById("root");
const title = document.createElement("h1");
const p = document.createElement("p");

title.textContent = `Hola desde el modo: ${import.meta.env.VITE_VIEW}`;

p.textContent = `Estamos utilizando la ${import.meta.env.VITE_EXPLICATION}`;

title.className = styles.title;
p.className = styles.text;

element.appendChild(title);
element.appendChild(p);
