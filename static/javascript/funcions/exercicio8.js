import { persons } from "../datos/datosEnunciados.js";

export function personasConMascota() {
  let personasConMascota = [];

  for (let contador = 0; contador < persons.length; contador++) {
    const persona = persons[contador];

    personasConMascota.push({
      nombre: persona.nombre,
      edad: persona.edad,
      mascota: persona.pet || null,
    });
  }

  return personasConMascota;
}
