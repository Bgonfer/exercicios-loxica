import { persons, pets, animals } from "../datos/datosEnunciados.js";

export function patasMascota() {
  let totalLegs = 0;

  persons.forEach((person) => {
    const petName = person.pet;

    const pet = pets.find((p) => p.name === petName);
    if (!pet) {
      console.warn(`Mascota no encontrada: ${petName}`);
      return;
    }

    const animal = animals.find((a) => a.kind === pet.type);
    if (!animal) {
      console.warn(`Tipo de animal no encontrado: ${pet.type}`);
      return;
    }

    totalLegs += animal.legs;
  });

  return totalLegs;
}

console.log("Total de patas de todas las mascotas:", patasMascota());
