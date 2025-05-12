/**
 *  ###########################
 *  ## E J E R C I C I O   5 ##
 *  ###########################
 */

import { persons } from "../datos/datosEnunciados.js";

export function nomTodasMascotas() {
  let nomTodasLasMascotas = "";

  for (let contador = 0; contador < persons.length; contador++) {
    nomTodasLasMascotas += persons[contador].pet + " ";
  }

  return nomTodasLasMascotas.trim();
}
