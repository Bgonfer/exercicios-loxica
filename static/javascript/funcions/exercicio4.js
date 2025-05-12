/**
 *  ###########################
 *  ## E J E R C I C I O   4 ##
 *  ###########################
 *
 */

import { countries } from "../datos/datosEnunciados.js";

export function paisMasInfectados() {
  let maxInfectados = 0;
  let nombrePais = "";

  for (let contador = 0; contador < countries.length; contador++) {
    if (countries[contador].infected > maxInfectados) {
      maxInfectados = countries[contador].infected;
      nombrePais = countries[contador].name;
    }
  }

  return nombrePais;
}
