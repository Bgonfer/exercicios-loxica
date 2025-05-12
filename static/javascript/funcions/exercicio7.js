import { persons } from "../datos/datosEnunciados.js";

export function personasConPerro() {
  return persons.filter((persons) => persons.country === "ES" && persons.pet);
}
