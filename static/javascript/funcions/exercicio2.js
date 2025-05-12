/**
 *  ###########################
 *  ## E J E R C I C I O   2 ##
 *  ###########################
 *
 *  Número de persoas sanas.
 *
 */
import { persons } from "../datos/datosEnunciados.js";
export function numPersoasSanas() {
  let numPersoasSanas = 0;
  for (let contador = 0; contador < persons.length; contador++) {
    //console.log("persons[", contador, "]", persons[contador]);

    if (persons[contador].infected == false) {
      numPersoasSanas++;
    }
  }

  return numPersoasSanas;
}
