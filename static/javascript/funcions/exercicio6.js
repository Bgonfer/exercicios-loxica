import { persons } from "../datos/datosEnunciados.js";

export function personasInfectadas() {
  let PersonasInfectadas = 0;
  for (let contador = 0; contador < persons.length; contador++) {
    PersonasInfectadas = PersonasInfectadas + persons[contador].infected;
  }
  return PersonasInfectadas;
}
