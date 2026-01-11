const FormularioDisco = ({ disco }) => {
  const {
    nombreDisco,
    caratula,
    grupoInterprete,
    anyPublicacion,
    genero,
    localizacion,
    prestado,
  } = disco;

  return (
    <>
      <input name="nombreDisco" value={nombreDisco} placeholder="Nombre del disco" />
      <input name="caratula" value={caratula} placeholder="URL Carátula" />
      <input name="grupoInterprete" value={grupoInterprete} placeholder="Grupo / Intérprete" />
      <input name="anyPublicacion" type="number" value={anyPublicacion} placeholder="Año" />

      <select name="genero" value={genero}>
        <option value="">Selecciona género</option>
        <option value="Rock">Rock</option>
        <option value="Pop">Pop</option>
        <option value="Jazz">Jazz</option>
        <option value="Metal">Metal</option>
      </select>

      <input name="localizacion" value={localizacion} placeholder="Localización" />

      <label>
        <input type="checkbox" name="prestado" checked={prestado} />
        Prestado
      </label>
    </>
  );
};

export default FormularioDisco;
