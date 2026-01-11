import { createContext, useEffect, useState } from "react";

export const DiscoContext = createContext();

export const DiscosProvider = ({ children }) => {
  const [discos, setDiscos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscos = async () => {
      try {
        const res = await fetch("http://localhost:3000/discos");
        const data = await res.json();
        setDiscos(data);
      } catch (error) {
        console.error("Error cargando discos", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscos();
  }, []);

  return (
    <DiscoContext.Provider value={{ discos, setDiscos, loading }}>
      {children}
    </DiscoContext.Provider>
  );
};