import { datosDiscos } from "../datos/datosDiscos";
import { v4 as uuidv4 } from "uuid";

const guardarDisco = (disco, listaDiscos, setListaDiscos, setDisco, valoresIniciales, setErrores, validarDisco) => {
  const erroresForm = validarDisco(disco);
  if (erroresForm.length === 0) {
    const nuevoDisco = { id: uuidv4(), ...disco };
    
    setListaDiscos([...listaDiscos, nuevoDisco]);
    setDisco(valoresIniciales);
    setErrores([]);

    datosDiscos.discos = [...datosDiscos.discos, nuevoDisco];
  } else {
    setErrores(erroresForm);
  }
};

export { guardarDisco };
