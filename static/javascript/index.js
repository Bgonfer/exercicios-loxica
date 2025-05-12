import { numAfectados } from "./funcions/exercicio1.js";
import { numPersoasSanas } from "./funcions/exercicio2.js";
import { numPersoasInfectadasPais } from "./funcions/exercicio3.js";
import { paisMasInfectados } from "./funcions/exercicio4.js";
import { nomTodasMascotas } from "./funcions/exercicio5.js";
import { personasInfectadas } from "./funcions/exercicio6.js";
import { personasConPerro } from "./funcions/exercicio7.js";
import { personasConMascota } from "./funcions/exercicio8.js";
import { patasMascota } from "./funcions/exercicio10.js";

let numAfectadosExer1 = numAfectados();
let numPersoasSanasExer2 = numPersoasSanas();
console.log("Exercicio 1: Número de persoas infectadas ", numAfectadosExer1);
console.log(
  "Exercicio 2: Número de persoas non infectadas ",
  numPersoasSanasExer2
);

let numPersoasInfectadasPorPais = numPersoasInfectadasPais();
console.log(
  "Exercicio 3: Número de persoas infectadas nos países do array ",
  numPersoasInfectadasPorPais
);

let paisMasInfectadosExer4 = paisMasInfectados();
console.log("Exercicio 4:País con más infectados", paisMasInfectadosExer4);

let nomTodasMascotasExer5 = nomTodasMascotas();
console.log(
  "Exercicio 5: Array con el nombre de todas las mascotas",
  nomTodasMascotasExer5
);

let personasInfectadasExer6 = personasInfectadas();
console.log(
  "Exercicio 6: Array con las personas infectadas del array de personas"
);

let personasConPerroExer7 = personasConPerro();
console.log("Exercicio 7: Personas españolas con perro");

let personasConMascotaExer8 = personasConMascota();
console.log("Exercicio 8: Personas con mascota");

let patasMascotaExer10 = patasMascota();
console.log("Exercicio 10: Patas de las mascotas");

// Pinto os resultados dos exercicios

let refExer1 = document.querySelector(`[name='exer-1']`);
let refExer2 = document.querySelector(`[name='exer-2']`);
let refExer3 = document.querySelector(`[name='exer-3']`);
let refExer4 = document.querySelector(`[name='exer-4']`);
let refExer5 = document.querySelector(`[name='exer-5']`);
let refExer6 = document.querySelector(`[name='exer-6']`);
let refExer7 = document.querySelector(`[name='exer-7']`);
let refExer8 = document.querySelector(`[name='exer-8']`);
let refExer10 = document.querySelector(`[name='exer-10']`);

refExer1.after(`${numAfectadosExer1}`);
refExer2.after(numPersoasSanasExer2);
refExer3.after(numPersoasInfectadasPorPais);
refExer4.after(paisMasInfectadosExer4);
refExer5.after(nomTodasMascotasExer5);
refExer6.after(personasInfectadasExer6);
refExer7.after(personasConPerroExer7);
refExer8.after(personasConMascotaExer8);
refExer10.after(patasMascotaExer10);
