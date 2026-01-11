import { useContext, useRef } from "react";
import { DiscoContext } from "../context/DiscosProvider.jsx";
import { saveDiscoToAPI } from "../libraries/apiRequests.js";

const InsertarDisco = () => {
  const { discos, setDiscos } = useContext(DiscoContext);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    const newDisco = {
      nombreDisco: form.nombreDisco.value,
      caratula: form.caratula.value,
      grupoInterprete: form.grupoInterprete.value,
      anyPublicacion: form.anyPublicacion.value,
      genero: form.genero.value,
      localizacion: form.localizacion.value,
      prestado: form.prestado.checked,
    };

    try {
      const saved = await saveDiscoToAPI(newDisco);
      setDiscos([...discos, saved]);
      form.reset();
    } catch (error) {
      throw error;
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="nombreDisco" placeholder="Nombre del disco" defaultValue="" />
      <input name="caratula" placeholder="URL Carátula" defaultValue="" />
      <input name="grupoInterprete" placeholder="Grupo / Intérprete" defaultValue="" />
      <input type="number" name="anyPublicacion" placeholder="Año" defaultValue="" />

      <select name="genero" defaultValue="">
        <option value="">Selecciona género</option>
        <option value="Rock">Rock</option>
        <option value="Pop">Pop</option>
        <option value="Jazz">Jazz</option>
        <option value="Metal">Metal</option>
      </select>

      <input name="localizacion" placeholder="Localización" defaultValue="" />

      <label>
        <input type="checkbox" name="prestado" defaultChecked={false} />
        Prestado
      </label>

      <button type="submit">Guardar Disco</button>
    </form>
  );
};

export default InsertarDisco;
