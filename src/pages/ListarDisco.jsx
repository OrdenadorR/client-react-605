import { useState, useEffect } from 'react';

const ListarDisco = () => {
  const [discos, setDiscos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscos = async () => {
      try {
        const res = await fetch("http://localhost:3000/discos");
        const data = await res.json();
        setDiscos(data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchDiscos();
  }, []);


  if (loading) return <p>Cargando discos...</p>;

  return (
    <div className="contenedor-discos">
      {discos.map(disco => (
        <div key={disco.id} className="disco-card">
          {disco.caratula && (
            <img src={disco.caratula} alt={disco.nombreDisco} width={100} />
          )}
          <h3>{disco.nombreDisco}</h3>
          <p>{disco.grupoInterprete}</p>
          <p>{disco.genero}</p>
          <p>{disco.anyPublicacion}</p>
        </div>
      ))}
    </div>
  );
};

export default ListarDisco;